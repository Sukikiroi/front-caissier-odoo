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
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setemail } from '../redux/slices';
import { Logo } from './Logo';
import { OAuthButtonGroup } from './OAuthButtonGroup';
import { PasswordField } from './PasswordField';
import axios from 'axios';
const Login = () => {
  let navigate = useNavigate();
  const [wrong, setwrong] = useState(false);
  const username = useSelector(state => state.settings.username);
  const password = useSelector(state => state.settings.password);
  const submitlogin = () => {
    console.log(username);
    console.log(password);

    axios
      .post(`http://localhost:3004/login`, {
        username: username,
        password: password,
      })
      .then(res => {
        if (res.status === 200) {
          setwrong(false);
          console.log(res);
          navigate("/home", { replace: true });
          localStorage.setItem(
            'log',
            JSON.stringify({
              username: username,
              password: password,
            })
          )
        }
       
        
         
        
      });
      console.log('bahahaha')
      setwrong(true);
  };

  const dispatch = useDispatch();
  return (
    <Container
      bg={'white.50'}
      maxW="lg"
      py={{
        base: '12',
        md: '24',
      }}
      px={{
        base: '0',
        sm: '8',
      }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Logo />
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
            base: 'transparent',
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
          <Stack spacing="6">
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
