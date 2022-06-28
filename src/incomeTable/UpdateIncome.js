import React, { useState } from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Input,
  Flex,
  TagLabel,
  Text,
} from '@chakra-ui/react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Avatar,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon, WarningIcon } from '@chakra-ui/icons';
import {
  Tag,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from '@chakra-ui/react';
import axios from 'axios';
import { Label } from '@mui/icons-material';

const UpdateIncome = ({ incomedata }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setdata] = useState();
  const [door, setdoor] = useState('');
  const [entrance, setentrance] = useState('');
  const [section, setsection] = useState('');
  const [concerned, setconcerned] = useState('');
  const [taxpayer, settaxpayer] = useState('');
  const [sold, setsold] = useState('');

  console.log(incomedata);
  return (
    <>
      <Button onClick={onOpen} bg={'white'}>
        <EditIcon color={'green.400'} w={19} h={19} />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={'3xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>تحديث </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box w={400} h={400} color="black">
              <Flex w={400} justifyContent={'space-between'} mb={5}>
                <Text w={100} fontSize={'2xl'} mr={5}>
                  المبلغ
                </Text>
                <Input
                  w={300}
                  variant="filled"
                  bg="blue.100"
                  placeholder="Filled"
                  value={concerned}
                  onChange={e => setconcerned(e.target.value)}
                />
              </Flex>
              <Flex w={400} justifyContent={'space-between'} mb={5}>
                <Text w={200} fontSize={'2xl'} mr={5}>
                  رقم العملية
                </Text>
                <Input
                  w={300}
                  variant="filled"
                  bg="blue.100"
                  placeholder="Filled"
                  value={door}
                  onChange={e => setdoor(e.target.value)}
                />
              </Flex>
              <Flex w={400} justifyContent={'space-between'} mb={5}>
                <Text w={200} fontSize={'2xl'} mr={5}>
                  رقم الزبون
                </Text>
                <Input
                  w={300}
                  variant="filled"
                  bg="blue.100"
                  placeholder="Filled"
                  value={entrance}
                  onChange={e => setentrance(e.target.value)}
                />
              </Flex>

              <Tabs align="end" variant="enclosed">
                <TabList>
                  <Tab>ورق</Tab>
                  <Tab>معدن</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Box w="30%" h="100%" display="block">
                      <Flex justifyContent="space-between" mb={5}>
                        <Tag>200 </Tag>
                        X2
                      </Flex>

                      <Flex justifyContent="space-between" mb={5}>
                        <Tag>500 </Tag>
                        X2
                      </Flex>
                      <Flex justifyContent="space-between" mb={5}>
                        <Tag>1000 </Tag>
                        X2
                      </Flex>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Box w="30%" h="100%" display="block">
                      <Flex justifyContent="space-between" mb={5}>
                        <Tag>10 </Tag>
                        X2
                      </Flex>

                      <Flex justifyContent="space-between" mb={5}>
                        <Tag>20 </Tag>
                        X2
                      </Flex>
                      <Flex justifyContent="space-between" mb={5}>
                        <Tag>50 </Tag>
                        X2
                      </Flex>

                      <Flex justifyContent="space-between" mb={5}>
                        <Tag>100 </Tag>
                        X2
                      </Flex>

                      <Flex justifyContent="space-between" mb={5}>
                        <Tag>200 </Tag>
                        X2
                      </Flex>
                    </Box>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              الغاء
            </Button>
            <Button variant="outline"> تغيير</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateIncome;
