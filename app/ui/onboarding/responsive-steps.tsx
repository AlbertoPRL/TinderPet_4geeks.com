import { Skeleton, useMediaQuery } from "@chakra-ui/react";
import { StepsInterface } from "@/app/lib/schema";

import dynamic from "next/dynamic";

const StepsMobile = dynamic(() => import("./steps-mobile"), {
  loading: () => (
    <Skeleton borderRadius="10px" p={12} w={{ base: "80%" }}>
      Loading...
    </Skeleton>
  ),
  ssr: false,
});

const Steps = dynamic(() => import("./steps"), {
  loading: () => (
    <Skeleton borderRadius="10px" p={12} w={{ base: "80%", lg: "20%" }}>
      Loading...
    </Skeleton>
  ),
  ssr: false,
});

export default function ResponsiveSteps({
  steps,
  activeStep,
  setActiveStep,
}: {
  steps: StepsInterface[];
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [isMobile] = useMediaQuery("(max-width: 992px)");

  return (
    <>
      {isMobile ? (
        <StepsMobile
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      ) : (
        <Steps
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      )}
    </>
  );
}
