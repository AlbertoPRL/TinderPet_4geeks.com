import { Skeleton, useMediaQuery } from "@chakra-ui/react";
import { StepsInterface } from "@/app/lib/schema";

import dynamic from "next/dynamic";

const StepsMobile = dynamic(() => import("./steps-mobile"), {
  loading: () => (
    <div>
      <Skeleton borderRadius="10px" p={12} w={"full"}>
        Loading...
      </Skeleton>
    </div>
  ),
  ssr: false,
});

const Steps = dynamic(() => import("./steps"), {
  loading: () => (
    <div>
      <Skeleton borderRadius="10px" p={12} h={"full"}>
        Loading...
      </Skeleton>
    </div>
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
