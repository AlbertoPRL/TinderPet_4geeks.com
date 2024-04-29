import { Button, Flex, FormControl, FormHelperText, FormLabel, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Switch, useDisclosure } from "@chakra-ui/react";
import { AutoComplete, AutoCompleteInput, AutoCompleteTag, AutoCompleteList, AutoCompleteItem } from "@choc-ui/chakra-autocomplete";
import { Key } from "react";


interface FilterSwitchProps {
    label: string;
    id: string;
    isChecked: boolean;
    onChange: () => void;
    isDisabled: boolean;
    resources: Trait[] | Interest[] | Breed[] | null;
}

export default function FilterSwitch({ label, id, isChecked, onChange, isDisabled, resources}: FilterSwitchProps) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <HStack alignItems='center'>
            <FormLabel mb='0' htmlFor={id} display='flex' alignItems='center'>
                {label}
            </FormLabel>
            <Switch id={id} isChecked={isChecked} onChange={onChange} isDisabled={isDisabled} />
            <Button onClick={onOpen}>Edit</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{label}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex pt="48" justify="center" align="center" w="full" direction="column">
                            <FormControl>
                                <AutoComplete openOnFocus multiple onChange={(vals : string[]) => console.log(vals)}>
                                    <AutoCompleteInput variant="filled">
                                        {({ tags } : any ) =>
                                            tags.map((tag:{
                                                label: string;
                                                onRemove: () => void;
                                            }, tid: Key | null | undefined) => (
                                                <AutoCompleteTag
                                                    key={tid}
                                                    label={tag.label}
                                                    onRemove={tag.onRemove}
                                                />
                                            ))
                                        }
                                    </AutoCompleteInput>
                                    <AutoCompleteList>
                                        {resources?.map(( resource, cid) => (
                                            <AutoCompleteItem
                                                key={`option-${cid}`}
                                                value={resource?.name}
                                                textTransform="capitalize"
                                                _selected={{ bg: "whiteAlpha.50" }}
                                                _focus={{ bg: "whiteAlpha.100" }}
                                            >
                                                {resource?.name}
                                            </AutoCompleteItem>
                                        ))}
                                    </AutoCompleteList>
                                </AutoComplete>
                                <FormHelperText>Choose the Filters</FormHelperText>
                            </FormControl>
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Save
                        </Button>
                        <Button variant="ghost" onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </HStack>

    );
}