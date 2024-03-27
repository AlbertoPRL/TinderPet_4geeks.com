import {
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

export default function PetInformationForm() {
  return (
    <div>
      <FormControl>
        <FormLabel htmlFor="petName">Pet Name</FormLabel>
        <Input type="text" id="petName" />

        <FormLabel htmlFor="petType">Pet Type</FormLabel>
        <Select id="petType" placeholder="Select an option">
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
        </Select>

        <FormLabel htmlFor="petBreed">Pet Breed</FormLabel>
        <Input type="text" id="petBreed" />

        <FormLabel htmlFor="petAge">Pet Age</FormLabel>
        <Select id="petAge" placeholder="Select an option">
          <option value="baby">Baby</option>
          <option value="young">Young</option>
          <option value="adult">Adult</option>
          <option value="senior">Senior</option>
        </Select>
      </FormControl>
    </div>
  );
}
