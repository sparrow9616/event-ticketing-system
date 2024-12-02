'use client'

import {
  Box,
  Container,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Card,
  CardBody,
  Stack,
} from '@chakra-ui/react'
import { FiUsers, FiDollarSign, FiCalendar, FiTrendingUp } from 'react-icons/fi'

// Sample data
const stats = [
  { label: 'Total Events', value: '12', icon: FiCalendar, change: '+3 this month' },
  { label: 'Total Revenue', value: '$24,560', icon: FiDollarSign, change: '+12% vs last month' },
  { label: 'Total Tickets', value: '1,245', icon: FiUsers, change: '86 sold today' },
  { label: 'Conversion Rate', value: '68%', icon: FiTrendingUp, change: '+5% vs last month' },
]

const recentEvents = [
  {
    id: 1,
    name: 'Tech Conference 2024',
    date: 'Mar 15, 2024',
    ticketsSold: 373,
    revenue: '$11,190',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Music Festival',
    date: 'Apr 20, 2024',
    ticketsSold: 1144,
    revenue: '$22,880',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Food & Wine Expo',
    date: 'May 5, 2024',
    ticketsSold: 258,
    revenue: '$3,870',
    status: 'Draft',
  },
]

export default function DashboardPage() {
  return (
    <Box as="main" py={8}>
      <Container maxW="container.xl">
        <Stack spacing={8}>
          <Heading>Dashboard</Heading>

          {/* Stats Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardBody>
                  <Stat>
                    <Box fontSize="3xl" color="purple.500" mb={2}>
                      <stat.icon />
                    </Box>
                    <StatLabel>{stat.label}</StatLabel>
                    <StatNumber>{stat.value}</StatNumber>
                    <StatHelpText>{stat.change}</StatHelpText>
                  </Stat>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>

          {/* Recent Events Table */}
          <Card>
            <CardBody>
              <Heading size="md" mb={4}>Recent Events</Heading>
              <Box overflowX="auto">
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Event Name</Th>
                      <Th>Date</Th>
                      <Th isNumeric>Tickets Sold</Th>
                      <Th isNumeric>Revenue</Th>
                      <Th>Status</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {recentEvents.map((event) => (
                      <Tr key={event.id}>
                        <Td fontWeight="medium">{event.name}</Td>
                        <Td>{event.date}</Td>
                        <Td isNumeric>{event.ticketsSold}</Td>
                        <Td isNumeric>{event.revenue}</Td>
                        <Td>
                          <Badge
                            colorScheme={event.status === 'Active' ? 'green' : 'gray'}
                            borderRadius="full"
                            px={2}
                          >
                            {event.status}
                          </Badge>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </Box>
            </CardBody>
          </Card>
        </Stack>
      </Container>
    </Box>
  )
}
