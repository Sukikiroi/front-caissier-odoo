import { useRef } from "react";
import { FocusScope } from "@react-aria/focus";
import { useDialog } from "@react-aria/dialog";
import { useOverlay, useModal, DismissButton } from "@react-aria/overlays";
import { mergeProps } from "@react-aria/utils";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

import { store } from "../redux/store"
export function Popover(props) {
  let ref = useRef();
  let { popoverRef = ref, isOpen, onClose, children, ...otherProps } = props;

  // Handle events that should cause the popup to close,
  // e.g. blur, clicking outside, or pressing the escape key.
  let { overlayProps } = useOverlay(
    {
      isOpen,
      onClose,
      shouldCloseOnBlur: true,
      isDismissable: true
    },
    popoverRef
  );

  let { modalProps } = useModal();
  let { dialogProps } = useDialog(otherProps, popoverRef);

  // Add a hidden <DismissButton> component at the end of the popover
  // to allow screen reader users to dismiss the popup easily.
  return (
    

 <Provider store={store}>


    <FocusScope contain restoreFocus>
      <Box
        {...mergeProps(overlayProps, modalProps, dialogProps)}
        ref={popoverRef}
        background="white"
        border="1px solid"
        borderColor="gray.300"
        borderRadius="md"
        position="absolute"
        zIndex="10"
        top="100%"
        boxShadow="lg"
        marginTop="1"
        padding="6"
        outline="none"
      >
        {children}
        <DismissButton onDismiss={onClose} />
      </Box>
    </FocusScope>
    </Provider>
  
  );
}
