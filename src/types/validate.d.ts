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
export interface ValidateArgs<T> {
  name: string;
  value: T;
}
export type Validate = <T>({}: ValidateArgs<T>) => string;