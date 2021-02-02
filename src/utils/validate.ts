import { Tests, validationsTypes } from '../validate';
import customMessage from './customMessage';
import { isEqual, notNull, validPattern } from './validations';

const ERROR = {
  INVALID: 'invalid',
  OFF: 'off',
  EMPTY: 'empty',
  NOT_EQUAL: 'notEqual',
};

const NO_ERROR: object = Object.create(null);

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

function validCustomSelect(name: string, value: string) {
  if (!value) return { [name]: customMessage(name, ERROR.EMPTY) };

  const TYPES: { [prop: string]: string[] } = {
    petType: ['dog', 'cat', 'birdy', 'hamster'],
    petGender: ['male', 'female'],
    petSpayedOrNeutered: ['true', 'false'],
    petWeight: ['5/10', '10/15', '15/20', '20/25'],
  };

  if (TYPES[name].includes(value)) return;
  return { [name]: customMessage(name, ERROR.INVALID) };
}

const inputValidations = {
  policy(name: string, value: boolean) {
    if (value)
      return NO_ERROR;
    return { [name]: customMessage(name, ERROR.OFF) };
  },

  password(name: string, value: string) {
    const tests: Tests = [
      [notNull(value), ERROR.EMPTY],
      [validPattern(patternFor.password, value), ERROR.INVALID],
    ];

    return validTests(name, tests);
  },

  confirm(
    name: string,
    { password, confirm }: { password: string; confirm: string }
  ) {
    const tests: Tests = [
      [notNull(password), ERROR.EMPTY],
      [isEqual(password, confirm), ERROR.NOT_EQUAL],
    ];

    return validTests(name, tests);
  },

  petBirthDay(name: string, value: any) {
    return NO_ERROR;
  },

  petPhoto(name: string, value: any) {
    return NO_ERROR;
  },

  altPhone(name: string, value: any) {
    return NO_ERROR;
  },

  default(name: string, value: any) {
    if (NOT_NULLS.includes(name)) {
      return validTextInput(name, value);
    } else if (CUSTOM_SELECTS.includes(name)) {
      return validCustomSelect(name, value);
    }

    return NO_ERROR;
  },
};

export default function validate(names: string | string[], values: any) {
  function validInput(name: string) {
    const key = name as validationsTypes;
    const validateValue = inputValidations[key]
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
