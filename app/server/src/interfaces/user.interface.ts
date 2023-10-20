

interface IAddress {
  postalCode: string;
  street: string;
  number: string;
  addressComplement: string;
  neighborhood: string;
  city: string;
  state: string;
  longitude: string;
  latitude: string;
}

interface IUser {
  accountOnboardingType: string;
  documentNumber: string;
  phoneNumber: string;
  email: string;
  motherName: string;
  fullName: string;
  socialName?: string;
  birthDate: string;
  address: IAddress;
  isPoliticallyExposedPerson: boolean;
  createTimestamp?: Date;
}

export { IAddress, IUser };
