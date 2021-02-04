export interface MyFormData {
  zipCode: string;
  email?: string;
  password?: string;
  confirm?: string;
  policy?: boolean;
  firstName?: string;
  lastName?: string;
  phone?: string;
  altPhone?: string;
  cpf?: string;
  petType?: string;
  petName?: string;
  petBreed?: string;
  petGender?: string;
  petBirthday?: string;
  petSpayedOrNeutered?: string;
  petWeight?: string;
  petPhoto?: {
    file: File,
    name: string,
  };

  kisses?: boolean;
  walk?: boolean;
  barking?: boolean;
  snuggling?: boolean;
  treats?: boolean;
  playingFetch?: boolean;
  naps?: boolean;
  toys?: boolean;

  petDetail?: string;
}
