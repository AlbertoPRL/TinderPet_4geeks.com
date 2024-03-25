import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { ButtonSubmitForm } from "../buttons";
import { useForm } from "react-hook-form";
import { TSignUpSchema, signUpSchema } from "@/app/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: TSignUpSchema) => {
    console.log("submitted", data);
    await new Promise((r) => setTimeout(r, 1000)); //
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="4">
        {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore */}
        <FormControl isInvalid={errors.email}>
          <FormLabel size="sm">Email address</FormLabel>
          <Input
            type="email"
            {...register("email")}
            bg="white"
            borderColor="#d8dee4"
            size="sm"
            borderRadius="6px"
          />
          <FormErrorMessage>
            {errors.email && <p>{`${errors.email.message}`}</p>}
          </FormErrorMessage>
        </FormControl>

        {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore */}
        <FormControl isInvalid={errors.password}>
          <FormLabel size="sm">Password</FormLabel>

          <Input
            type="password"
            {...register("password")}
            bg="white"
            borderColor="#d8dee4"
            size="sm"
            borderRadius="6px"
          />
          <FormErrorMessage>
            {errors.password && <p>{`${errors.password.message}`}</p>}
          </FormErrorMessage>
        </FormControl>

        {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore */}
        <FormControl isInvalid={errors.confirmPassword}>
          <FormLabel size="sm">Confirm Password</FormLabel>
          <Input
            type="password"
            {...register("confirmPassword")}
            bg="white"
            borderColor="#d8dee4"
            size="sm"
            borderRadius="6px"
          />
          <FormErrorMessage>
            {errors.confirmPassword && (
              <p>{`${errors.confirmPassword.message}`}</p>
            )}
          </FormErrorMessage>
        </FormControl>

        <ButtonSubmitForm disabled={isSubmitting} text={"Sign Up"} />
      </Stack>
    </form>
  );
}
