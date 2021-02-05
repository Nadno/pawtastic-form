import { ConfirmPassword, Tests, Validation, ValidationFunction, ValidationsTypes } from '../types/validate';
import customMessage from './customMessage';
import { biggerOrEqualThan, isEqual, lessOrEqualThan, notNull, validPattern } from './validations';

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

function validTests(name: string, tests: Tests): Validation {
  for (let [valid, error] of tests) {
    if (!valid()) return { [name]: customMessage(name, error) };
  }
  return NO_ERROR;
}

function validTextInput(name: string, value: string) {
  const tests: Tests = [[notNull(value), ERROR.EMPTY]];

  if (patternFor[name])
    tests.push([validPattern(patternFor[name], value), ERROR.INVALID]);

  return validTests(name, tests);
}

function validCustomSelect(name: string, value: string): Validation {
  if (!value) return { [name]: customMessage(name, ERROR.NOT_SELECTED) };

  const TYPES: { [prop: string]: string[] } = {
    petType: ['dog', 'cat', 'birdy', 'hamster'],
    petGender: ['male', 'female'],
    petSpayedOrNeutered: ['SONYes', 'SONNo'],
    petWeight: ['5/10', '10/15', '15/20', '20/25'],
  };

  if (TYPES[name].includes(value)) return NO_ERROR;
  return { [name]: customMessage(name, ERROR.INVALID) };
}

const inputValidations = {
  policy(name: string, value: boolean): Validation {
    if (value)
      return NO_ERROR;
    return { [name]: customMessage(name, ERROR.OFF) };
  },

  password(name: string, value: string): Validation {
    const tests: Tests = [
      [notNull(value), ERROR.EMPTY],
      [validPattern(patternFor.password, value), ERROR.INVALID],
    ];

    return validTests(name, tests);
  },

  confirm(
    name: string,
    { password, confirm }: ConfirmPassword
  ): Validation {
    const tests: Tests = [
      [notNull(password), ERROR.EMPTY],
      [isEqual(password, confirm), ERROR.NOT_EQUAL],
    ];

    return validTests(name, tests);
  },

  petBirthday(name: string, value: string): Validation {
    const [year] = value.split("-");
    if (!year)  return { [name]: customMessage(name, ERROR.INVALID) };
    
    const minYear = biggerOrEqualThan(Number(year), 1950);
    const maxYear = lessOrEqualThan(Number(year), 2020);
    const betweenMinAndMax = minYear() && maxYear();

    if (betweenMinAndMax) return NO_ERROR;
    return { [name]: customMessage(name, ERROR.INVALID) };
  },

  petPhoto(name: string, { file }: { file: File; }): Validation {
    if (!file) return NO_ERROR;
    const [img, type] = file.type.split("/");
    const IS_IMAGE = img === "image";
    const IS_ACCEPTABLE = ["jpg", "png", "jpeg"].includes(type);

    if (IS_IMAGE && IS_ACCEPTABLE) return NO_ERROR;
    return { [name]: customMessage(name, ERROR.INVALID) };
  },

  altPhone(name: string, value: string): Validation {
    const HAS_VALUE = value.length > 0;
    if (HAS_VALUE) {
      if (validPattern(patternFor["phone"], value)()) {
        return NO_ERROR;
      } else {
        return { [name]: customMessage(name, ERROR.INVALID) };
      }
    }

    return NO_ERROR;
  },

  default(name: string, value: string): Validation {
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
    const validateValue: ValidationFunction = inputValidations[key]
      ? inputValidations[key]
      : inputValidations.default;

    if (key === 'confirm') {
      const { password, confirm }: any = values;
      return validateValue(key, { password, confirm });
    }

    return validateValue(name, values[name]);
  }

  if (typeof names !== 'string') {
    for (let name of names) {
      const error = validInput(name);
      if (error) return error;
    }
    return;
  }

  return validInput(names);
}
