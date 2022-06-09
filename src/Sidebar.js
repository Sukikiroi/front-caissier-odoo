import React from "react";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react'
import {
  CalendarIcon,
  LockIcon,
  PlusSquareIcon,
  SettingsIcon,
  ViewIcon,
} from "@chakra-ui/icons";





const Sidebar = () => {
  const [collapse, setcollapse] = useState(false);

  return (
    <>
      {collapse ? (
        <div
          style={{ width: "200px", backgroundColor: " " ,height:'100%',marginTop:'30px'}}
        >
          <div
            style={{
              width: "100",
              height: "30px",
              backgroundColor: " ",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "30px",
              borderRadius:"6"
             
            }}
          >
            <Hamburger  borderTopRadius="6" bg='white' color='black' toggled={collapse} toggle={setcollapse} />
          </div>

          <Grid templateColumns="repeat(1, 1fr)" gap={6}>
            <GridItem w="100%" h="50" >
              <Center    bg='white' color='#2C9BC8' fontSize="lg">

                <Link onClick={()=>setcollapse(!collapse)} to={'/income'}> المداخيل</Link>
              </Center>
            </GridItem>
            <GridItem w="100%" h="50" >
              <Center    bg='white' color='#2C9BC8' fontSize="lg">

                <Link onClick={()=>setcollapse(!collapse)} to={'/spending'}> المصاريف</Link>
              </Center>
            </GridItem>
            <GridItem w="100%" h="50" >
              <Center    bg='white' color='#2C9BC8'fontSize="lg">

                <Link onClick={()=>setcollapse(!collapse)} to={'/income'}> الغلق</Link>
              </Center>
            </GridItem>
            <GridItem w="100%" h="50" >
              <Center    bg='white' color='#2C9BC8' fontSize="lg">

                <Link onClick={()=>setcollapse(!collapse)} to={'/income'}> المقارنة</Link>
              </Center>
            </GridItem>
            <GridItem w="100%" h="50" >
              <Center    bg='white' color='#2C9BC8' fontSize="lg">

                <Link onClick={()=>setcollapse(!collapse)} to={'/settings'}>  الاعدادات</Link>
              </Center>
            </GridItem>
          </Grid>
        </div>
      ) : (
        <div
          style={{ width: "60px", backgroundColor: " ", height: "100%" ,marginTop:'30px'}}
        >
          <div
            style={{
              width: "100",
              height: "30px",
              backgroundColor: " ",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "30px",
              boxShadow:' 0px 10px 15px -3px rgba(0,0,0,0.1)'
            }}
          >
            <Box bg='#072F60' color='white'>
            <Hamburger toggled={collapse} toggle={setcollapse} />
            </Box>
          </div>
          <Grid templateColumns="repeat(1, 1fr)" gap={6}>

            <GridItem w="100%" h="50"  >
              <Center bg='white' color='#2C9BC8'fontSize="lg">
                
                <PlusSquareIcon  h={30} w={30}/>
              </Center>
            </GridItem>
            <GridItem w="100%" h="50" >
              <Center   bg='white' color='#2C9BC8' fontSize="lg">
                <CalendarIcon h={30} w={30} />
              </Center>
            </GridItem>
            <GridItem w="100%" h="50" >
              <Center   bg='white' color='#2C9BC8' fontSize="lg">
                <LockIcon  h={30} w={30}/>
              </Center>
            </GridItem>
            <GridItem w="100%" h="50" >
              <Center   bg='white' color='#2C9BC8'fontSize="lg">
                <ViewIcon   h={30} w={30}/>
              </Center>
            </GridItem>
            <GridItem w="100%" h="50" >
              <Center   bg='white' color='#2C9BC8'fontSize="lg">
                <SettingsIcon   h={30} w={30}/>
              </Center>
            </GridItem>
          </Grid>
        </div>
      )}
    </>
  );
};

export default Sidebar;
