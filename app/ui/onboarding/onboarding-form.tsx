export default function OnboardingForm({ step }: { step: number }) {
  function RenderFormByStep() {
    switch (step) {
      case 0:
        console.log("Render step one");
        return <p>Step 1</p>;

      case 1:
        console.log('Render "Are you a company?" form');
        return <p>Step 2</p>;

      case 2:
        console.log('Render "What is the name of your company?" field');
        return <p>Step 3</p>;

      default:
        return null;
    }
  }
  return <RenderFormByStep />;
}
