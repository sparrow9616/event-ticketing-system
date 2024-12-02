'use client'

import { Box, Container, Heading, SimpleGrid, Text, Button, Icon, Stack } from '@chakra-ui/react'
import { FiCalendar, FiTicket, FiUsers, FiBarChart } from 'react-icons/fi'

const features = [
  {
    icon: FiCalendar,
    title: 'Event Creation',
    description: 'Create and manage events with ease. Set dates, venues, and ticket types.',
  },
  {
    icon: FiTicket,
    title: 'Ticket Management',
    description: 'Sell tickets online, generate QR codes, and track sales in real-time.',
  },
  {
    icon: FiUsers,
    title: 'Attendee Management',
    description: 'Manage attendees, check-ins, and gather valuable insights.',
  },
  {
    icon: FiBarChart,
    title: 'Analytics Dashboard',
    description: 'Track sales, attendance, and revenue with detailed analytics.',
  },
]

export default function Home() {
  return (
    <Box as="main">
      {/* Hero Section */}
      <Box bg="purple.600" color="white" py={20}>
        <Container maxW="container.xl">
          <Stack spacing={8} alignItems="center" textAlign="center">
            <Heading size="2xl">
              Modern Event Management & Ticketing System
            </Heading>
            <Text fontSize="xl" maxW="2xl">
              Create, manage, and sell tickets for your events with our powerful platform.
              From small meetups to large conferences, we've got you covered.
            </Text>
            <Button size="lg" colorScheme="white" variant="outline">
              Get Started
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxW="container.xl" py={20}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature, index) => (
            <Box 
              key={index} 
              p={6} 
              bg="white" 
              borderRadius="lg" 
              boxShadow="md"
              _hover={{ transform: 'translateY(-5px)', transition: '0.2s' }}
            >
              <Icon as={feature.icon} w={10} h={10} color="purple.500" mb={4} />
              <Heading size="md" mb={4}>{feature.title}</Heading>
              <Text color="gray.600">{feature.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
