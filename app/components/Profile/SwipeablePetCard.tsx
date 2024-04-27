"use client";

import { useSwipeable } from 'react-swipeable'
import { Card, CardBody, Stack, Heading, CardFooter, Text, Image } from "@chakra-ui/react";
import React from 'react';

export default function SwipeablePetCard() {

    const handlers = useSwipeable({
        onSwipedRight: () => console.log('swiped right'),
        onSwipedLeft: () => console.log('swiped left'),
        trackMouse: true
    })

    return (
        <Card maxW='md' {...handlers}>
            <CardBody>
                <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Pictures showing the pet'
                    borderRadius='lg'
                    style={{ pointerEvents: 'none'}}
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>Pet.Name</Heading>
                    <Text>
                        This is a test Pet.Description and it will show a description for the current pet showing on the swipeable card description
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter>
            </CardFooter>
        </Card>
    )
} 