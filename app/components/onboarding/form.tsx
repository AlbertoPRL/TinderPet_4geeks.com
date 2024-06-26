"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Box, Flex, useSteps } from "@chakra-ui/react";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import ResponsiveSteps from "./responsive-steps";
import PetInformationForm from "./pet-information-form";
import TraitsInterestsForm from "./traits-interests-form";
import ConfirmationForm from "./confirmation-form";
import CompletedForm from "./completed-form";

import { FormDataType, FormSchema } from "@/app/lib/types/schema";
import {
  fetchInterests,
  fetchTraits,
  savePetData,
} from "@/app/lib/actions/onboarding";
import { useStore } from "@/app/lib/hooks/zustandHook";
import { useAuthStore } from "@/app/lib/stores/authStore";
import { useUserStore } from "@/app/lib/stores/userStore";
import { PetForm } from "@/app/lib/types/Dtos/PetDto";

const steps = [
  {
    title: "Step 1",
    description: "Pet Information",
    fields: ["petName", "petType", "petBreed", "birthday", "petGender"],
  },
  {
    title: "Step 2 ",
    description: "Traits & Interests",
    fields: ["petTraits", "petInterests", "description", "petPicture"],
  },
  { title: "Step 3", description: "Confirmation" },
];

export default function Form() {
  const router = useRouter();
  const { activeStep, setActiveStep, goToNext, goToPrevious } = useSteps({
    index: 0,
    count: steps?.length,
  });

  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const authStore = useStore(useAuthStore, (state) => state);
  const store = useStore(useUserStore, (state) => state);

  const methods = useForm<FormDataType>({
    resolver: zodResolver(FormSchema),
  });

  const { handleSubmit, reset, trigger } = methods;

  const onSubmit: SubmitHandler<FormDataType> = async (data) => {
    const token = authStore?.token;
    const user = await store?.fetchUser(token);

    const getTraits = await fetchTraits();
    const getInterests = await fetchInterests();

    const traits = data.petTraits;
    const interests = data.petInterests;

    let traitsId: string[] = [];
    let interestsId: string[] = [];

    if (traits) {
      getTraits.map((item: { name: string; id: string }) => {
        if (traits.includes(item.name)) {
          return traitsId.push(item.id);
        }
      });
    }

    if (interests) {
      getInterests.map((item: { name: string; id: string }) => {
        if (interests.includes(item.name)) {
          return interestsId.push(item.id);
        }
      });
    }

    const pet: PetForm = {
      userId: user?.userId,
      name: data.petName,
      specieId: data.petType,
      breedId: data.petBreed,
      gender: Number(data.petGender),
      description: data.description,
      birthday: data.birthday,
      interests: interestsId,
      traits: traitsId,
    };
    console.log("pet", pet);
    const petId = await savePetData(pet, token);

    console.log("pet saved", petId);

    if (petId) {
      setIsCompleted(true);
    }

    reset();
  };

  type FieldName = keyof FormDataType;

  const next = async () => {
    const fields = steps[activeStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (activeStep < steps.length - 1) {
      goToNext();
    }
    if (activeStep === steps.length - 1) {
      await handleSubmit(onSubmit)();
      setActiveStep(3);
    }
  };

  const prev = () => {
    if (activeStep > 0) {
      goToPrevious();
    }
  };

  const handleRouterToMain = () => {
    setTimeout(() => {
      document.cookie = "isAuthenticated=true";
      document.cookie = "pets=true";
      document.cookie = "userId=" + store?.user?.userId;
      router.push("/tinderpet/pet-selector");
    }, 5000);

    return <CompletedForm />;
  };

  if (isCompleted) {
    return handleRouterToMain();
  }

  return (
    <Flex height="100vh" alignItems={"center"} justifyContent={"center"}>
      <Box
        p={4}
        display={"flex"}
        justifyContent="center"
        alignItems={{ base: "center", lg: "stretch" }}
        flexDirection={{ base: "column", lg: "row" }}
        gap={4}
        minH={"55%"}
        w={"full"}
      >
        <ResponsiveSteps
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />

        <Box width={{ base: "95%", sm: "80%", lg: "600px" }}>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
              {activeStep === 0 && (
                <PetInformationForm
                  activeStep={activeStep}
                  nextStep={next}
                  prevStep={prev}
                />
              )}
              {activeStep === 1 && (
                <TraitsInterestsForm nextStep={next} prevStep={prev} />
              )}

              {activeStep === 2 && (
                <ConfirmationForm nextStep={next} prevStep={prev} />
              )}
            </form>
          </FormProvider>
        </Box>
      </Box>
    </Flex>
  );
}
