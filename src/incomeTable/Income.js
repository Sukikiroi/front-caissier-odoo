import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Tag,
  Heading,
  Center,
  HStack,
} from '@chakra-ui/react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react';
import { Avatar, AvatarBadge, AvatarGroup ,Wrap,WrapItem} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import useSWR from 'swr';
import IncomeTable from './incomeTable';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import NewIncomeModal from './newIncomeModal';
import Navbar from '../navbar';
import Drawernavbar from './drawerNavbar';
import IncomeFilter from './IncomeFilter';
import NewIncome from './NewIncome';

const Income = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const { data: total } = useSWR('http://localhost:3004/income', fetcher);
  const [dataincome, setdataincome] = React.useState(total);

  const { data: today } = useSWR('http://localhost:3004/income/today', fetcher);

  const gettotalincome = () => {
    setdataincome(total);
  };

  const gettodayincome = () => {
    setdataincome(today.todayincome);
    console.log(today);
  };
  if (!total || !today)
    return (
      <div>
        <Drawernavbar />
        loading...
      </div>
    );
  return (
    <>
      <Box bg="white" h={'100%'} p={4} color="white">
        <VStack>
          <Box w={'100%'} h={50} color={'#2C9BC8'} pr={30}>
            <Center w={'100%'} h={50}>
              {/* <Wrap>
                <WrapItem>
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                </WrapItem>
              </Wrap> */}
              <Spacer />
              <Heading>المداخيل</Heading>
            </Center>
          </Box>

          <Box w={'100%'} h={500}>
            <VStack>
              <Box w={'100%'} mt={30}>
                <HStack>
                  <Spacer />
                  <IncomeFilter />
                  <NewIncome />
                </HStack>
              </Box>
              <Box bg={'white'} w={'100%'} h={300}>
                <IncomeTable data={total} />
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default Income;

// <Flex>
// <Box p="4">
//   <Tag> 30000 الرصيد العام</Tag>
// </Box>
// <Spacer />
// <Box p="4">
//   <Tag>{today.todaBbalance} رصيد اليوم</Tag>
// </Box>
// </Flex>
// <ColorModeSwitcher />
// <Spacer />
// <Flex>
// <Button
// onClick={() => gettotalincome()}
// colorScheme="teal"
// variant="outline"
// >
// المداخيل العامة
// </Button>
// <Button
// onClick={() => gettodayincome()}
// colorScheme="teal"
// variant="outline"
// >
// مداخيل اليوم
// </Button>

// <NewIncomeModal/>
// </Flex>

// <IncomeTable data={dataincome} />
