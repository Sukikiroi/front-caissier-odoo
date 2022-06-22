import { Button, Text } from '@chakra-ui/react';
import React from 'react'
import Pdf from "react-to-pdf";
import { VisuallyHidden, VisuallyHiddenInput } from '@chakra-ui/react'







const PdfTemplate = () => {
    const ref = React.createRef();
  return (
    <>
    <Pdf targetRef={ref} filename="code-example.pdf">
      {({ toPdf }) => <Button bg='tomato' onClick={toPdf}>Generate Pdf</Button>}
    </Pdf>
    <VisuallyHidden>

 
    <div ref={ref}>
      <Text color="black">Hello CodeSandbox</Text>
       
    </div>
    </VisuallyHidden>
  </>
  )
}

export default PdfTemplate