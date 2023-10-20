import { z } from "zod";

const addressSchema = z.object({
  postalCode: z.string(),
  street: z.string(),
  number: z.string(),
  addressComplement: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.string(),
  longitude: z.string(),
  latitude: z.string(),
});

const userSchema = z.object({
  accountOnboardingType: z.string(),
  documentNumber: z.string(),
  phoneNumber: z.string(),
  email: z.string().email(),
  motherName: z.string(),
  fullName: z.string(),
  socialName: z.string(),
  birthDate: z.string(),
  address: addressSchema,
  isPoliticallyExposedPerson: z.boolean(),
});

export { addressSchema, userSchema };
