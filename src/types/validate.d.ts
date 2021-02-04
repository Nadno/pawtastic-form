export type Tests = [Function, string][];
export type ValidationsTypes =
  | 'policy'
  | 'password'
  | 'confirm'
  | 'petBirthday'
  | 'petPhoto'
  | 'altPhone'
  | 'default';

export type ConfirmPassword = { password: string; confirm: string; };
export type Validation = { [x: string]: string } | '';
export type ValidationFunction = (
  name: string,
  value: any
) => Validation;
