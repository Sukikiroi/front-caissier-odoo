import React from 'react';

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
} from '@chakra-ui/react';
import axios from 'axios';
import { DeleteIcon, EditIcon, WarningIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { updateincomeData } from '../redux/slices';

const DeleteIncome = ({ Incomeid }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const username = JSON.parse(localStorage.getItem('log')).username;
  const password = JSON.parse(localStorage.getItem('log')).password;
  const company_id = JSON.parse(localStorage.getItem('company_id'));
  const user = {
    username: username,
    password: password,
    company_id: company_id,
  };

  const DeleteIncome = () => {
    axios
      .post('http://localhost:3004/income/delete', {
        id: Incomeid,
      })
      .then(function (response) {
        axios.post(`http://localhost:3004/income`, user).then(res => {
          dispatch(updateincomeData(res.data));
          console.log(res.data);
        });

        onClose();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <Button onClick={onOpen} bg={'white'}>
        <DeleteIcon color={'tomato'} w={19} h={19} />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mr={30}> هل أنت متأكد </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{Incomeid}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              الغاء
            </Button>
            <Button variant="outline" onClick={DeleteIncome}> مسح </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteIncome;
