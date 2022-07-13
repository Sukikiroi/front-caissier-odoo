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
  HStack,
  Input,
  VStack,
  Spacer,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import IncomePaper from './IncomePaper';
import IncomeCoin from './IncomeCoin';
import { useToast } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { Textarea ,Text} from '@chakra-ui/react';
import axios from 'axios';
import { updateData, updatespendingData } from '../redux/slices';

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import currencyFormatter from "currency-formatter"

import { SiWhatsapp } from 'react-icons/si';
const NewIncome = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const dispatch = useDispatch();

  const [sold, setsold] = useState();
  const [entrance, setentrance] = useState([]);
  const [door, setdoor] = useState();
  const [section, setsection] = useState([]);
  const [concerned, setconcerned] = useState();
  const [taxpayer, settaxpayer] = useState();
  const [description, setdescription] = useState();
  const [desable, setdesable] = useState(false);
  const [doorname, setdoorname] = useState('');
  const [sectionname, setsectioname] = useState('');
  const [entrancename, setentrancename] = useState('');

  let doors = [
    {
      id: 1,
      name: 'المنزل',
      sections: [
        {
          id: 1,
          name: 'أمي',
          entrances: [
            {
              id: 1,
              name: 'المال نقدا ',
            },
            {
              id: 2,
              name: 'حاجيات المنزل ',
            },
            {
              id: 3,
              name: 'الطبيب ',
            },
            {
              id: 4,
              name: 'الدواء ',
            },
            {
              id: 5,
              name: 'التحاليل ',
            },
            {
              id: 6,
              name: 'الصيانة ',
            },
            {
              id: 7,
              name: 'الكهرباء ',
            },
            {
              id: 8,
              name: 'الماء ',
            },
            {
              id: 9,
              name: 'التسوق ',
            },
            {
              id: 10,
              name: 'التبرع ',
            },
            {
              id: 11,
              name: 'التجهيز ',
            },
            {
              id: 12,
              name: 'الهاتف ',
            },
            {
              id: 13,
              name: 'السفر ',
            },
            {
              id: 14,
              name: 'الضيافة ',
            },
          ],
        },

        {
          id: 2,
          name: 'الأسرة الكبيرة',
          entrances: [
            {
              id: 1,
              name: 'أم محمد علي ',
            },
            {
              id: 2,
              name: 'أم يحي ',
            },
            {
              id: 3,
              name: 'أم أنيس ',
            },
            {
              id: 4,
              name: 'أم محمد الطيب ',
            },
            {
              id: 5,
              name: 'أم مهدي ',
            },
            {
              id: 6,
              name: 'أم أمير ',
            },
          ],
        },

        {
          id: 3,
          name: 'الميراث',
          entrances: [
            {
              id: 1,
              name: 'أتعاب ',
            },
            {
              id: 2,
              name: 'دين سابق ',
            },
          ],
        },
        {
          id: 4,
          name: ' بلعابد فارس ',
          entrances: [
            {
              id: 1,
              name: 'المال نقدا ',
            },
            {
              id: 2,
              name: 'الضريبة ',
            },
            {
              id: 3,
              name: 'التأمين ',
            },
            {
              id: 4,
              name: 'الرخصة ',
            },
            {
              id: 5,
              name: 'الغرامة ',
            },
            {
              id: 6,
              name: 'الايجار ',
            },
            {
              id: 7,
              name: 'النفقة ',
            },
            {
              id: 8,
              name: 'الاتعاب ',
            },
          ],
        },
        {
          id: 5,
          name: 'بلعابد عيسى',
          entrances: [
            {
              id: 1,
              name: 'المال نقدا ',
            },
            {
              id: 2,
              name: 'حاجيات المنزل ',
            },
            {
              id: 3,
              name: 'الطبيب ',
            },
            {
              id: 4,
              name: 'الدواء ',
            },
            {
              id: 5,
              name: 'التحاليل ',
            },
            {
              id: 6,
              name: 'الصيانة ',
            },
            {
              id: 7,
              name: 'الكهرباء ',
            },
            {
              id: 8,
              name: 'الانترنات ',
            },
            {
              id: 9,
              name: 'الماء ',
            },
            {
              id: 10,
              name: 'التسوق ',
            },
            {
              id: 11,
              name: 'الضيافة ',
            },
            {
              id: 12,
              name: 'التبرع ',
            },
            {
              id: 13,
              name: 'التجهيز ',
            },
            {
              id: 14,
              name: 'الاشتراك ',
            },
            {
              id: 15,
              name: 'السفر ',
            },
            {
              id: 16,
              name: 'الهاتف ',
            },
          ],
        },
        {
          id: 6,
          name: ' بلعابد برهان الدين',
          entrances: [
            {
              id: 1,
              name: 'المال نقدا ',
            },
            {
              id: 2,
              name: 'حاجيات المنزل ',
            },
            {
              id: 3,
              name: 'الطبيب ',
            },
            {
              id: 4,
              name: 'الدواء ',
            },
            {
              id: 5,
              name: 'التحاليل ',
            },
            {
              id: 6,
              name: 'الصيانة ',
            },
            {
              id: 7,
              name: 'الكهرباء ',
            },
            {
              id: 8,
              name: 'الانترنات ',
            },
            {
              id: 9,
              name: 'الماء ',
            },
            {
              id: 10,
              name: 'التسوق ',
            },
            {
              id: 11,
              name: 'الضيافة ',
            },
            {
              id: 12,
              name: 'التبرع ',
            },
            {
              id: 13,
              name: 'التجهيز ',
            },
            {
              id: 14,
              name: 'الاشتراك ',
            },
            {
              id: 15,
              name: 'السفر ',
            },
            {
              id: 16,
              name: 'الهاتف ',
            },
          ],
        },
      ],
    },

    {
      id: 2,
      name: 'الشركة',
      sections: [
        {
          id: 1,
          name: 'الخدمات و الأجرة ',
          entrances: [
            {
              id: 1,
              name: 'النقل ',
            },
            {
              id: 2,
              name: 'الكراء ',
            },
            {
              id: 3,
              name: 'الصيانة ',
            },
            {
              id: 4,
              name: 'التنضيف ',
            },
            {
              id: 5,
              name: 'تحويل المال ',
            },
            {
              id: 6,
              name: 'الوقود ',
            },
          ],
        },
        {
          id: 2,
          name: 'الرسوم و الاشتراكات ',
          entrances: [
            {
              id: 1,
              name: 'الضريبة  ',
            },
            {
              id: 2,
              name: 'التأمين  ',
            },
            {
              id: 3,
              name: 'الرخصة  ',
            },
            {
              id: 4,
              name: 'الغرامة  ',
            },
            {
              id: 5,
              name: ' الاتعاب  ',
            },
          ],
        },
        {
          id: 3,
          name: 'التجهيز و التسير ',
          entrances: [
            {
              id: 1,
              name: 'تجهيز المخزن  ',
            },
            {
              id: 2,
              name: 'لوازم المخازن  ',
            },
            {
              id: 3,
              name: 'تجهيز المكاتب  ',
            },
            {
              id: 4,
              name: 'لوازم مكتبية  ',
            },
            {
              id: 5,
              name: ' تجهيز الورشة  ',
            },
            {
              id: 6,
              name: 'لوازم الورشة  ',
            },
          ],
        },
        {
          id: 4,
          name: 'التكاليف و المهمات ',
          entrances: [
            {
              id: 1,
              name: 'الدعوة  ',
            },
            {
              id: 2,
              name: 'الاستدعاء  ',
            },
          ],
        },
        {
          id: 5,
          name: 'التشريفات ',
          entrances: [
            {
              id: 1,
              name: 'المطعم  ',
            },
            {
              id: 2,
              name: 'المقهى  ',
            },
            {
              id: 3,
              name: 'الفندق  ',
            },
          ],
        },
        {
          id: 6,
          name: 'الفواتير ',
          entrances: [
            {
              id: 1,
              name: 'الكهرباء  ',
            },
            {
              id: 2,
              name: 'الانترنيت  ',
            },
            {
              id: 3,
              name: 'الهاتف ااثابت  ',
            },
            {
              id: 4,
              name: 'الهاتف النقال  ',
            },
            {
              id: 5,
              name: 'الماء   ',
            },
            {
              id: 6,
              name: 'الايجار  ',
            },
          ],
        },
        {
          id: 7,
          name: 'التبرعات و الهدايا ',
          entrances: [
            {
              id: 1,
              name: 'الصدقة  ',
            },
            {
              id: 2,
              name: 'الهدية  ',
            },
            {
              id: 3,
              name: 'الزكاة  ',
            },
            {
              id: 4,
              name: 'الرعاية  ',
            },
          ],
        },
      ],
    },

    {
      id: 3,
      name: 'الشريك',
      sections: [
        {
          id: 1,
          name: 'بلعابد برهان الدين ',
          entrances: [
            {
              id: 1,
              name: 'مال نقدا ',
            },
            {
              id: 2,
              name: 'سلعة ',
            },
            {
              id: 3,
              name: 'خدمات و أتعاب ',
            },
          ],
        },
        {
          id: 2,
          name: 'بقاق عومار ',
          entrances: [
            {
              id: 1,
              name: 'مال نقدا ',
            },
            {
              id: 2,
              name: 'سلعة ',
            },
            {
              id: 3,
              name: 'خدمات و أتعاب ',
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: 'الحضيرة',
      sections: [
        {
          id: 1,
          name: 'جاك 1',
          entrances: [
            {
              id: 1,
              name: 'الوقود ',
            },
            {
              id: 2,
              name: 'االصيانة ',
            },
            {
              id: 3,
              name: 'التصليح ',
            },
            {
              id: 4,
              name: 'التأمين ',
            },
          ],
        },
        {
          id: 2,
          name: 'جاك 2',
          entrances: [
            {
              id: 1,
              name: 'الوقود ',
            },
            {
              id: 2,
              name: 'االصيانة ',
            },
            {
              id: 3,
              name: 'التصليح ',
            },
            {
              id: 4,
              name: 'التأمين ',
            },
          ],
        },
        {
          id: 3,
          name: 'جاك 3',
          entrances: [
            {
              id: 1,
              name: 'الوقود ',
            },
            {
              id: 2,
              name: 'االصيانة ',
            },
            {
              id: 3,
              name: 'التصليح ',
            },
            {
              id: 4,
              name: 'التأمين ',
            },
          ],
        },
        {
          id: 4,
          name: 'شاحنة الرفع 2طن ',
          entrances: [
            {
              id: 1,
              name: 'الوقود ',
            },
            {
              id: 2,
              name: 'االصيانة ',
            },
            {
              id: 3,
              name: 'التصليح ',
            },
            {
              id: 4,
              name: 'التأمين ',
            },
          ],
        },
        {
          id: 5,
          name: 'شاحنة الرفع 3طن ',
          entrances: [
            {
              id: 1,
              name: 'الوقود ',
            },
            {
              id: 2,
              name: 'االصيانة ',
            },
            {
              id: 3,
              name: 'التصليح ',
            },
            {
              id: 4,
              name: 'التأمين ',
            },
          ],
        },
        {
          id: 6,
          name: 'سيارة برهان ',
          entrances: [
            {
              id: 1,
              name: 'الوقود ',
            },
            {
              id: 2,
              name: 'االصيانة ',
            },
            {
              id: 3,
              name: 'التصليح ',
            },
            {
              id: 4,
              name: 'التأمين ',
            },
          ],
        },
        {
          id: 7,
          name: 'سيارة عيسى ',
          entrances: [
            {
              id: 1,
              name: 'الوقود ',
            },
            {
              id: 2,
              name: 'االصيانة ',
            },
            {
              id: 3,
              name: 'التصليح ',
            },
            {
              id: 4,
              name: 'التأمين ',
            },
          ],
        },
        {
          id: 8,
          name: 'شاحنة شيري ',
          entrances: [
            {
              id: 1,
              name: 'الوقود ',
            },
            {
              id: 2,
              name: 'االصيانة ',
            },
            {
              id: 3,
              name: 'التصليح ',
            },
            {
              id: 4,
              name: 'التأمين ',
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: 'الاستتمار',
      sections: [
        {
          id: 1,
          name: 'section one',
          entrances: [
            {
              id: 1,
              name: 'الوقود ',
            },
            {
              id: 2,
              name: 'االصيانة ',
            },
            {
              id: 3,
              name: 'التصليح ',
            },
            {
              id: 4,
              name: 'التأمين ',
            },
          ],
        },
      ],
    },
  ];

  const handledoors = id => {
    // this all sections of that door
    setsection(doors.filter(item => item.id == id)[0]['sections']);
    setdoorname(doors.filter(item => item.id == id)[0].name);
  };
  const handlesections = id => {
    setentrance(section.filter(item => item.id == id)[0]['entrances']);

    setsectioname(section.filter(item => item.id == id)[0].name);
  };

  const handleentrances = id => {
    setentrancename(entrance.filter(item => item.id == id)[0].name);
  };
  const newspending = {
    entrance: entrancename,
    door: doorname,
    section: sectionname,
    description: description,
    sold: sold,
    concerned: concerned,
    taxpayer: taxpayer,
  };

  const sendIncome = () => {
    axios.post(`http://localhost:3004/spending/new`, newspending).then(res => {
      
      setdesable(true);
      const username=JSON.parse(localStorage.getItem('log')).username
      const password=JSON.parse(localStorage.getItem('log')).password
      const company_id= JSON.parse(localStorage.getItem('company_id'))
      const user={username:username,password:password,company_id:company_id}
      axios.post(`http://localhost:3004/spending`,user).then(res => {
        dispatch(updatespendingData(res.data));
      });
      onClose();
    });

    toast({
      title: ' مصروف جديد',
      description: ' تمت بنجاح',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });

    setTimeout(() => {
      setdesable(false);
    }, '1000');
  };

  return (
    <>
      <Button onClick={onOpen} bg={'#2C9BC8'}>
        <Heading as="h5" size="sm">
          جديد
        </Heading>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={'3xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mr={30}> مصروف جديد </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box h={450} bg={'white'}>
              <Box display={'flex'} justifyContent={'flex-end'}>
                <Button colorScheme="whatsapp" leftIcon={<SiWhatsapp />}>
                  اشعار المسؤل
                </Button>
              </Box>

              <br></br>
              <br></br>
              <br></br>
              <VStack>
                <HStack w="100%">
                  <Box w={'50%'}>
                    <Select pr={30}
                      w={'100%'}
                      placeholder=" الفسم"
                      onChange={e => handledoors(e.target.value)}
                    >
                      {doors.map((door, key) => {
                        return <option value={door.id}>{door.name}</option>;
                      })}
                    </Select>
                  </Box>

                  <Select
                    w={'50%'}  pr={30}
                    placeholder="المدخل "
                    onChange={e => handlesections(e.target.value)}
                  >
                    {section.map((item, key) => {
                      return <option value={item.id}>{item.name}</option>;
                    })}
                  </Select>
                </HStack>
                <Select
                  w={'100%'}  pr={30}
                  placeholder=" الباب"
                  onChange={e => handleentrances(e.target.value)}
                >
                  {entrance.map((item, key) => {
                    return <option value={item.id}>{item.name}</option>;
                  })}
                </Select>
                <Flex w="100%" justifyContent={'space-between'} alignItems="center">
                  <Box ml={30} w="30%">
                    <Text>
                    { currencyFormatter.format(sold, {
                            symbol: 'دج',
                            decimal: '.',
                            thousand: ',',
                            precision: 2,
                            format: '%v %s', // %s is the symbol and %v is the value
                          })}
                    </Text>
                
                  </Box>
               
                  <NumberInput  >
                    <NumberInputField
                   
                      pr={35}
                      onChange={e =>
                        setsold(e.target.value)
                      }
                      placeholder="                المبلغ"
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>

                  <Input w="30%"
                    onChange={e => setconcerned(e.target.value)}
                    placeholder="                المعني"
                    _placeholder={{ opacity: 1, color: 'black' }}
                  />
                </Flex>
                <Flex w="100%" justifyContent={'space-between'}>
                  <Input
                    onChange={e => settaxpayer(e.target.value)}
                    placeholder="                المكلف"
                    _placeholder={{ opacity: 1, color: 'black' }}
                  />

                  <Input
                    value={JSON.parse(localStorage.getItem('log')).name}
                    placeholder="                اسم أمين الصندوق"
                    _placeholder={{ opacity: 1, color: 'black' }}
                  />
                </Flex>

                <Box w={'100%'} bg={''} h={'30'}>
                  <Textarea
                    placeholder=" ملاحظة"
                    onChange={e => setdescription(e.target.value)}
                  />
                </Box>
              </VStack>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" bg={'blue.300'} color={'white'} mr={3}>
              الغاء
            </Button>

            <Button
              bg={'blue.200'}
              color={'white'}
              mr={3}
              onClick={sendIncome}
              isDisabled={desable}
            >
              حفظ
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewIncome;
