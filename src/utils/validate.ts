const ERROR = {
  INVALID: 'invalid',
  OFF: 'off',
  EMPTY: 'empty',
  NOT_EQUAL: 'notEqual',
};

const createResult = (value?: any) => ({ value });

const validations = {
  policy(value: any) {},

  password(value: any) {},

  confirm(value: any) {},

  petBirthDay(value: any) {},

  petPhoto(value: any) {},

  altPhone(value: any) {},

  default(value: any) {},
};

type validationsTypes =
  | 'policy'
  | 'password'
  | 'confirm'
  | 'petBirthDay'
  | 'petPhoto'
  | 'altPhone'
  | 'default';

export default function validate(name: string | string[], values: any) {
  const key = name as validationsTypes;

  if (typeof name !== 'string') {
    // Object.entries(values).forEach(([key, value]: [unknown, any]) => {
    //   const validKey = key as validationsTypes;
    //   if (validations[validKey]) {
    //     return validations[validKey](value);
    //   }
    //   return validations.default(value);
    // });

    return;
  }

  if (validations[key]) {
    return validations[key](values[name]);
  }

  validations.default(values[name]);
}
