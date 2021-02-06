import {
  ConfirmPassword,
  Tests,
  Validate,
  ValidateArgs,
  ValidationsTypes,
} from '../types/validate';
import customMessage from './customMessage';
import {
  biggerOrEqualThan,
  isEqual,
  lessOrEqualThan,
  notNull,
  validPattern,
} from './validations';

const ERROR = {
  INVALID: 'invalid',
  OFF: 'off',
  EMPTY: 'empty',
  NOT_EQUAL: 'notEqual',
  NOT_SELECTED: 'notSelected',
};
const NO_ERROR = '';

const CUSTOM_SELECTS = [
  'petType',
  'petSpayedOrNeutered',
  'petWeight',
  'petGender',
];

const NOT_NULLS = [
  'email',
  'policy',
  'firstName',
  'lastName',
  'phone',
  'cpf',
  'petName',
];

const patternFor: { [prop: string]: RegExp } = {
  email: /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/,
  password: /^[a-zA-Z-0-9]{6,30}$/,
  cpf: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
  phone: /\d{2}\s\9\d{4}\-\d{4}/,
};

function validTests(name: string, tests: Tests) {
  for (let [valid, error] of tests) {
    if (!valid()) return error;
  }
  return NO_ERROR;
}

function validTextInput(name: string, value: string) {
  const tests: Tests = [[notNull(value), ERROR.EMPTY]];

  if (patternFor[name])
    tests.push([validPattern(patternFor[name], value), ERROR.INVALID]);

  return validTests(name, tests);
}

function validCustomSelect(name: string, value: string) {
  if (!value) return ERROR.NOT_SELECTED;

  const TYPES: { [prop: string]: string[] } = {
    petType: ['dog', 'cat', 'birdy', 'hamster'],
    petGender: ['male', 'female'],
    petSpayedOrNeutered: ['SONYes', 'SONNo'],
    petWeight: ['5/10', '10/15', '15/20', '20/25'],
  };

  if (TYPES[name].includes(value)) return NO_ERROR;
  return ERROR.INVALID;
}

const inputValidations = {
  policy({ value }: ValidateArgs<boolean>) {
    if (value) return NO_ERROR;
    return ERROR.OFF;
  },

  password({ name, value }: ValidateArgs<string>) {
    const tests: Tests = [
      [notNull(value), ERROR.EMPTY],
      [validPattern(patternFor.password, value), ERROR.INVALID],
    ];

    return validTests(name, tests);
  },

  confirm({ name, value }: ValidateArgs<ConfirmPassword>) {
    const tests: Tests = [
      [notNull(value.password), ERROR.EMPTY],
      [isEqual(value.password, value.confirm), ERROR.NOT_EQUAL],
    ];

    return validTests(name, tests);
  },

  petBirthday({ value }: ValidateArgs<string>) {
    const [year] = value.split('-');
    if (!year) return ERROR.INVALID;

    const minYear = biggerOrEqualThan(Number(year), 1950);
    const maxYear = lessOrEqualThan(Number(year), 2020);
    const betweenMinAndMax = minYear() && maxYear();

    if (betweenMinAndMax) return NO_ERROR;
    return ERROR.INVALID;
  },

  petPhoto({ value }: ValidateArgs<File>) {
    if (!value.name) return NO_ERROR;
    const [img, type] = value.type.split('/');
    const IS_IMAGE = img === 'image';
    const IS_ACCEPTABLE = ['jpg', 'png', 'jpeg'].includes(type);

    if (IS_IMAGE && IS_ACCEPTABLE) return NO_ERROR;
    return ERROR.INVALID;
  },

  altPhone({ value }: ValidateArgs<string>) {
    const HAS_VALUE = value.length > 0;
    if (HAS_VALUE) {
      if (validPattern(patternFor['phone'], value)()) {
        return NO_ERROR;
      } else {
        return ERROR.INVALID;
      }
    }

    return NO_ERROR;
  },

  default({ name, value }: ValidateArgs<string>) {
    if (NOT_NULLS.includes(name)) {
      return validTextInput(name, value);
    } else if (CUSTOM_SELECTS.includes(name)) {
      return validCustomSelect(name, value);
    }

    return NO_ERROR;
  },
};

export default function validate(names: string | string[], values: any) {
  function validInput(name: string): any {
    const key = name as ValidationsTypes;
    const validateValue = inputValidations[key]
      ? (inputValidations[key] as Validate)
      : (inputValidations.default as Validate);

    if (key === 'confirm') {
      const { password, confirm } = values;
      return validateValue<ConfirmPassword>({
        name,
        value: { password, confirm },
      });
    }

    return validateValue<string | File | boolean>({
      name,
      value: values[name],
    });
  }

  if (typeof names !== 'string') {
    for (let name of names) {
      const error = validInput(name);
      if (error)
        return {
          error: { [name]: customMessage(name, error) },
          hasError: true,
        };
    }

    return {};
  }

  const error = validInput(names);
  if (error) return { [names]: customMessage(names, error) };
  return {};
}
