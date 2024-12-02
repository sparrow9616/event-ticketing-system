'use client'

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Button,
  Badge,
  Image,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import { FiCalendar, FiMapPin, FiUsers } from 'react-icons/fi'

// Sample event data
const events = [
  {
    id: 1,
    title: 'Tech Conference 2024',
    date: 'March 15-16, 2024',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
    price: '$299',
    capacity: 500,
    remaining: 127,
  },
  {
    id: 2,
    title: 'Music Festival',
    date: 'April 20-22, 2024',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea',
    price: '$199',
    capacity: 2000,
    remaining: 856,
  },
  {
    id: 3,
    title: 'Food & Wine Expo',
    date: 'May 5, 2024',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
    price: '$149',
    capacity: 300,
    remaining: 42,
  },
]

export default function EventsPage() {
  return (
    <Box as="main" py={8}>
      <Container maxW="container.xl">
        <Stack direction="row" justify="space-between" align="center" mb={8}>
          <Heading>Upcoming Events</Heading>
          <Button colorScheme="purple">Create Event</Button>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {events.map((event) => (
            <Box
              key={event.id}
              borderRadius="lg"
              overflow="hidden"
              bg="white"
              boxShadow="md"
              transition="transform 0.2s"
              _hover={{ transform: 'translateY(-4px)' }}
            >
              <Image
                src={event.image}
                alt={event.title}
                height={200}
                width="100%"
                objectFit="cover"
              />
              <Box p={6}>
                <Stack spacing={3}>
                  <Heading size="md">{event.title}</Heading>
                  
                  <Stack direction="row" align="center" color="gray.600">
                    <FiCalendar />
                    <Text>{event.date}</Text>
                  </Stack>
                  
                  <Stack direction="row" align="center" color="gray.600">
                    <FiMapPin />
                    <Text>{event.location}</Text>
                  </Stack>
                  
                  <Stack direction="row" align="center" color="gray.600">
                    <FiUsers />
                    <Text>{event.remaining} tickets left</Text>
                  </Stack>

                  <Stack direction="row" justify="space-between" align="center">
                    <Text fontWeight="bold" fontSize="xl">
                      {event.price}
                    </Text>
                    <Button colorScheme="purple" size="sm">
                      Buy Tickets
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
