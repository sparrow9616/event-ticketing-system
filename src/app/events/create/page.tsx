'use client'

import {
  Box,
  Container,
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  SimpleGrid,
  useToast,
  Card,
  CardBody,
} from '@chakra-ui/react'
import { useState } from 'react'

export default function CreateEventPage() {
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: 'Event created.',
        description: "We've created your event for you.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    }, 1000)
  }

  return (
    <Box as="main" py={8}>
      <Container maxW="container.md">
        <Stack spacing={8}>
          <Heading>Create New Event</Heading>

          <Card>
            <CardBody>
              <form onSubmit={handleSubmit}>
                <Stack spacing={6}>
                  <FormControl isRequired>
                    <FormLabel>Event Title</FormLabel>
                    <Input placeholder="Enter event title" />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Description</FormLabel>
                    <Textarea placeholder="Enter event description" rows={4} />
                  </FormControl>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <FormControl isRequired>
                      <FormLabel>Date</FormLabel>
                      <Input type="datetime-local" />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Location</FormLabel>
                      <Input placeholder="Enter event location" />
                    </FormControl>
                  </SimpleGrid>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <FormControl isRequired>
                      <FormLabel>Ticket Price ($)</FormLabel>
                      <NumberInput min={0}>
                        <NumberInputField placeholder="Enter ticket price" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Available Tickets</FormLabel>
                      <NumberInput min={1}>
                        <NumberInputField placeholder="Enter number of tickets" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>
                  </SimpleGrid>

                  <FormControl>
                    <FormLabel>Event Image URL</FormLabel>
                    <Input type="url" placeholder="Enter image URL" />
                  </FormControl>

                  <Button
                    type="submit"
                    colorScheme="purple"
                    size="lg"
                    isLoading={isLoading}
                  >
                    Create Event
                  </Button>
                </Stack>
              </form>
            </CardBody>
          </Card>
        </Stack>
      </Container>
    </Box>
  )
}
