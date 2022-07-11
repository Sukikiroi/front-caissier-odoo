import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setemail } from '../redux/slices';
import { Logo } from './Logo';
import { OAuthButtonGroup } from './OAuthButtonGroup';
import { PasswordField } from './PasswordField';
import axios from 'axios';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';






const Login = () => {
  let navigate = useNavigate();
  const [wrong, setwrong] = useState(false);
  const username = useSelector(state => state.settings.username);
  const password = useSelector(state => state.settings.password);



  const submitlogin = () => {
    console.log(username);
    console.log(password);

    axios
      .post('http://localhost:3004/login', {
        username: username,
        password: password,
      })
      .then(function (response) {
        console.log("login")
        
        console.log(response.data[0].company_ids.length);
        if(response.data[0].company_ids.length===1){
          localStorage.setItem("role",0)
        }
        else   localStorage.setItem("role",1)
        navigate('/home', { replace: true });
localStorage.setItem("allcompany", JSON.stringify(response.data[0].company_ids))
localStorage.setItem("company_id",response.data[0].company_id[0])
localStorage.setItem("company",response.data[0].company_id[1])
        localStorage.setItem(
          'log',
          JSON.stringify({
            username: username,
            password: password,
            company: response.data[0].company_id[1],
            name: response.data[0].name,
          })
        );
      })
      .catch(function (error) {
        console.log(error);
        setwrong(true);
      });
  };

  const dispatch = useDispatch();
  return (
    <Container
      bg={'white'}
    maxW='lg'
      py={{
        base: '12',
        md: '24',
      }}
      px={{
        base: '0',
        sm: '8',
      }}

     
     
    >
    
      <Stack spacing="8" >
        <Stack spacing="6" >
          <Stack 
            spacing={{
              base: '2',
              md: '3',
            }}
            textAlign="center"
          >
            <Heading
              size={useBreakpointValue({
                base: 'xs',
                md: 'sm',
              })}
            >
              تسجيل الدخول إلى حسابك
            </Heading>
            <HStack spacing="1" justify="center"></HStack>
          </Stack>
        </Stack>
        <Box 
          py={{
            base: '0',
            sm: '8',
          }}
          px={{
            base: '4',
            sm: '10',
          }}
          bg={useBreakpointValue({
            base: 'tomato',
            sm: 'bg-surface',
          })}
          boxShadow={{
            base: 'none',
            sm: useColorModeValue('md', 'md-dark'),
          }}
          borderRadius={{
            base: 'none',
            sm: 'xl',
          }}
        >
          <Stack spacing="6" >
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">اسم االمستخدم</FormLabel>
                <Input
                  id="email"
                  type="email"
                  onChange={e => dispatch(setemail(e.target.value))}
                />
              </FormControl>
              <PasswordField />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultIsChecked> تذكرنى</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                هل نسيت كلمة السر؟
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button variant="primary" onClick={submitlogin}>
                تسجيل الدخول
              </Button>
              {wrong ? (
                <Box w={'100%'} h={20} color={'tomato'}>
                  !اسم المستخدم أو كلمة السر خاطئة
                </Box>
              ) : (
                ''
              )}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;
