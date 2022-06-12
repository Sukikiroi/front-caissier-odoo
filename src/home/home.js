import React from 'react';
import { Box } from '@chakra-ui/react';
import { Center, Square, Circle } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
const Home = () => {
  return (
    <Box w={'100%'} height={'900'} bg={'white'}>
      <Center bg="teal.50" h="100%" color="white">
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
         
            <GridItem
              w="150px"
              h="150"
              bg="blue.200"
              boxShadow="md"
              rounded="md"
            >
             
              <Image
                boxSize="150px"
                objectFit="cover"
                src="https://cdn-icons-png.flaticon.com/512/1198/1198290.png"
                alt="Dan Abramov"
              />
           
         
              <Center bg="teal.50" color="black">
              <Link href='http://localhost:3000/openning' isExternal>
              الصندوق
              </Link>
                
              </Center>
            </GridItem>
        
          <GridItem w="150px" h="150" bg="blue.200" boxShadow="md" rounded="md">
            <Image
              boxSize="150px"
              objectFit="cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_E4UnbqZGCfcTWfiuUQVlyxn0Z9F_0nv_g&usqp=CAU"
              alt="Dan Abramov"
            />
            <Center bg="teal.50" color="black">
              الخزينة
            </Center>
          </GridItem>
       
       
       
       
        </Grid>
      </Center>
    </Box>
  );
};

export default Home;
