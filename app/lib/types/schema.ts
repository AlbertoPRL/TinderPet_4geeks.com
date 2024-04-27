import { z } from "zod";

export const signUpSchema = z.object({
  firstName: z.string().min(3, "First name must be at least 3 characters."),
  lastName: z.string().optional(), // Last name is optional for now
  email: z.string().email(),
  password: z.string().min(5, "Password must be at least 5 characters"),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5, "Password must be at least 5 characters"),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;
export type TSignInSchema = z.infer<typeof signInSchema>;

export interface StepsInterface {
  title: string;
  description?: string;
  fields?: string[];
}

export interface PropsForms {
  step?: number | null;
  activeStep?: number;
  nextStep: () => void;
  prevStep: () => void;
  isLastStep?: boolean;
  hasCompletedAllSteps?: boolean;
}

// export const userInformationSchema = z.object({
//   firstName: z.string().min(3, "First name must be at least 3 characters."),
//   lastName: z.string().optional(),
//   country: z.string().min(1, "Please select a country"),
//   address: z.string().min(1, "Address field can't be empty."),
//   city: z.string().min(1, "City field can't be empty."),
//   state: z.string().min(1, "State field can't be empty."),
//   postalCode: z.string().length(5, "Postal code should have exactly 5 digits."),
// });

// export type UserInfoType = z.infer<typeof userInformationSchema>;

export const petInfoSchema = z.object({
  petName: z.string().min(1, "Pet name is mandatory."),
  petType: z.string().min(1, "Please select the type of your pet"),
  petAge: z
    .date({
      required_error: "Please select a date and time",
      invalid_type_error: "That's not a date!",
    })
    .refine((date) => {
      const now = new Date();
      return date < now;
    }, "Please select a date in the future"),
  petBreed: z.string().optional(),
  petGender: z.string().min(1, "Please specify the gender of your pet"),
});

export type PetInfoType = z.infer<typeof petInfoSchema>;

export const petOtherInfoSchema = z.object({
  petTraits: z.string().array().length(3, "3 traits required"),
  petInterests: z.string().array().length(3, " 3 interests required"),
  // petPicture: z.string().min(1, "Please upload a photo of your pet"), traits required"),
});

export type OtherInfoType = z.infer<typeof petOtherInfoSchema>;

export const preferencesSchema = z.object({
  preferencePetType: z.string().min(1, "Please select the type"),
  preferencePetGender: z.string().min(1, "Please specify the gender"),
  preferencePetTraits: z.string().array().length(3, "3 traits required"),
});

export type PreferencesType = z.infer<typeof preferencesSchema>;

export const FormSchema = petInfoSchema
  .extend(petOtherInfoSchema.shape)
  .extend(preferencesSchema.shape);

export type FormDataType = z.infer<typeof FormSchema>;
