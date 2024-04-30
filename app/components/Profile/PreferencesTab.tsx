'use client'

import { FormControl, FormLabel, Switch, VStack, Text, useBoolean } from "@chakra-ui/react"
import FilterSwitch from "./FilterSwtich";
import { useResourceStore } from "@/app/lib/stores/resourceStore";
import { useStore } from "zustand";


export default function PreferencesTab() {
    const [isFilterActivated, setIsFilterActivated] = useBoolean()
    const [isFilterByTraitsActivated, setIsFilterByTraitsActivated] = useBoolean();
    const [isFilterByInterestActivated, setIsFilterByInterestActivated] = useBoolean();
    const [isFilterByAgeActivated, setIsFilterByAgeActivated] = useBoolean();
    const resources = useStore(useResourceStore, (state) => state);

    resources.checkResources();
    return (
        <VStack w='100%' gap='5rem' mt='2rem'>
            <FormControl display='flex' alignItems='center' px='2rem'>
                <FormLabel htmlFor='search-filters' mb='0'>
                    Search Filters
                </FormLabel>
                <Switch id='search-filters' isChecked={isFilterActivated} onChange={setIsFilterActivated.toggle} />
            </FormControl>
            {isFilterActivated &&
                <Text fontSize='sm'><strong>Note:</strong> Filters could limit the matching experience</Text>
            };
            <FormControl display='flex' flexDirection='column' alignItems='start' w='100%' gap='3rem'>
                <FormControl display='flex' flexDirection='column' alignItems='start' w='100%' gap='3rem'>
                    <FilterSwitch resources={resources?.Traits} label='Filter by Traits' id='excludedTraits' isChecked={isFilterByTraitsActivated} onChange={setIsFilterByTraitsActivated.toggle} isDisabled={!isFilterActivated} />
                    <FilterSwitch resources={resources?.Interests} label='Filter by Interest' id='excludedInterests' isChecked={isFilterByInterestActivated} onChange={setIsFilterByInterestActivated.toggle} isDisabled={!isFilterActivated} />
                    <FilterSwitch resources={resources?.Breeds} label='Filter by Breed' id='excludedBreeds' isChecked={isFilterByAgeActivated} onChange={setIsFilterByAgeActivated.toggle} isDisabled={!isFilterActivated} />
                </FormControl>
            </FormControl>
        </VStack>
    )
}