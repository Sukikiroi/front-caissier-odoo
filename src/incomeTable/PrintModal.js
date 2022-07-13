import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Button,useDisclosure
  } from '@chakra-ui/react'

  import Pdf from "react-to-pdf";
  import React from 'react'
  import { FcPrint } from 'react-icons/fc';
  const PrintModal = () => {
    const ref = React.createRef();
    return (
        function BasicUsage() {
            const { isOpen, onOpen, onClose } = useDisclosure()
            return (
              <>
                <Button onClick={onOpen} bg="tomato" >jjjj</Button>
          
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
                    </ModalBody>
          
                    <ModalFooter>
                      <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                      </Button>
                      <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </>
            )
          }
    )
  }
  
  export default PrintModal