import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Center, Square, Circle } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ExternalLinkIcon } from '@chakra-ui/icons';
const Home = () => {
  return (
    <Center w={'100%'} height={'900'} bg={'white'}>
      <Flex w={500} h={500} justifyContent="space-between" alignItems="center">
        <Link to={"/openning"} >
       
        <Center
          w={200}
          h={200}
          bg="teal.200"
          color="white"
          shadow="xl"
          rounded="md"
        >
          <Text fontSize="xl" fontWeight="bold">
            الصندوق
          </Text>
        </Center>
        </Link>
        <Center
          w={200}
          h={200}
          bg="teal.200"
          color="white"
          shadow="xl"
          rounded="md"
        >
          <Text fontSize="xl" fontWeight="bold">
            الخزينة
          </Text>
        </Center>
      </Flex>
    </Center>
  );
};

export default Home;
