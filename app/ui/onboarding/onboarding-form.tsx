import ConfirmationForm from "./confirmation-form";
import PetInformationForm from "./pet-inforamtion-form";
import PreferencesForm from "./preferences-form";
import UserInformationForm from "./user-information-form";

export default function OnboardingForm({ step }: { step: number }) {
  function RenderFormByStep() {
    switch (step) {
      case 0:
        return <UserInformationForm />;

      case 1:
        return <PetInformationForm />;

      case 2:
        return <PreferencesForm />;
      case 3:
        return <ConfirmationForm />;
      default:
        return null;
    }
  }
  return <RenderFormByStep />;
}
