import { Checkbox, FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function PreferencesForm() {
  return (
    <div>
      <FormControl>
        <FormLabel>Preferred Play Styles:</FormLabel>
        <Checkbox value="playFetch">Likes to play fetch</Checkbox>
        <Checkbox value="walks">Enjoys walks</Checkbox>
        <Checkbox value="cuddles">Likes cuddles</Checkbox>
        <Checkbox value="other">Has other preferences</Checkbox>

        <FormLabel htmlFor="maxDistance">
          Maximum Distance for Playdates
        </FormLabel>
        <Input type="number" id="maxDistance" step="10" min="10" max="100" />
      </FormControl>
    </div>
  );
}
