import { z } from "zod";

export const signUpSchema = z.object({
  firstName: z.string().min(3, "First name must be at least 3 characters."),
  lastName: z.string().optional(), // Last name is optional for now
  email: z.string().email(),
  password: z.string().min(10, "Password must be at least 10 characters"),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(10, "Password must be at least 10 characters"),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;
export type TSignInSchema = z.infer<typeof signInSchema>;

export interface StepsInterface {
  title: string;
  description?: string;
}

export type PropsForms = {
  step?: number | null;
  activeStep?: number;
  nextStep: () => void;
  prevStep: () => void;
  isLastStep?: boolean;
  hasCompletedAllSteps?: boolean;
};

export const userInformationSchema = z.object({
  firstName: z.string().min(3, "First name must be at least 3 characters."),
  lastName: z.string().optional(),
  country: z.string().min(1, "Please select a country"),
  address: z.string().min(1, "Address field can't be empty."),
  city: z.string().min(1, "City field can't be empty."),
  state: z.string().min(1, "State field can't be empty."),
  postalCode: z.string().length(5, "Postal code should have exactly 5 digits."),
});

export type UserInfoType = z.infer<typeof userInformationSchema>;

export const petInfoSchema = z.object({
  petName: z.string().min(1, "Pet name is mandatory."),
  petType: z.string().min(1, "Please select the type of your pet"),
  petAge: z.string().min(1, "Please select the age of your pet"),
  petBreed: z.string().optional(),
  petGender: z.string().min(1, "Please specify the gender of your pet"),
});

export type PetInfoType = z.infer<typeof petInfoSchema>;

export const petOtherInfoSchema = z.object({
  petTraits: z.string().array().length(5, "5 traits required"),
  petInterests: z.string().array().min(1, "At least one interest is required"),
  // petPicture: z.string().min(1, "Please upload a photo of your pet"),
});

export type OtherInfoType = z.infer<typeof petOtherInfoSchema>;

export const preferencesSchema = z.object({
  preferencePetType: z.string().min(1, "Please select the type"),
  preferencePetAge: z.string().min(1, "Please select the age"),
  preferencePetGender: z.string().min(1, "Please specify the gender"),
  preferencePetTraits: z.string().array().length(5, "5 traits required"),
});

export type PreferencesType = z.infer<typeof preferencesSchema>;

export const FormSchema = userInformationSchema
  .extend(petInfoSchema.shape)
  .extend(petOtherInfoSchema.shape)
  .extend(preferencesSchema.shape);

export type FormDataType = z.infer<typeof FormSchema>;
