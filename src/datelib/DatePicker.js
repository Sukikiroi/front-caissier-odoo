import { useRef } from "react";
import { useDatePickerState } from "@react-stately/datepicker";
import { useDatePicker } from "@react-aria/datepicker";
import { FieldButton } from "./Button";
import { Calendar } from "./Calendar";
import { DateField, StyledField, TimeField } from "./DateField";
import { Popover } from "./Popover";
import { CalendarIcon, NotAllowedIcon } from "@chakra-ui/icons";
import {
  FormLabel,
  InputGroup,
  Box,
  InputRightElement
} from "@chakra-ui/react";

export function DatePicker(props) {
  let state = useDatePickerState({
    ...props,
    shouldCloseOnSelect: false
  });
  let ref = useRef();
  let {
    groupProps,
    labelProps,
    fieldProps,
    buttonProps,
    dialogProps,
    calendarProps
  } = useDatePicker(props, state, ref);

  return (
    <Box position="relative" display="inline-flex" flexDirection="column">
      <FormLabel {...labelProps}>{props.label}</FormLabel>
      <InputGroup {...groupProps} ref={ref} width="auto" display="inline-flex">
        <StyledField pr="4.5rem">
          <DateField {...fieldProps} />
          {state.validationState === "invalid" && (
            <NotAllowedIcon color="red.600" position="absolute" right="12" />
          )}
        </StyledField>
        <InputRightElement>
          <FieldButton {...buttonProps} isPressed={state.isOpen}>
            <CalendarIcon />
          </FieldButton>
        </InputRightElement>
      </InputGroup>
      {state.isOpen && (
        <Popover
          {...dialogProps}
          isOpen={state.isOpen}
          onClose={() => state.setOpen(false)}
        >
          <Calendar {...calendarProps} />
          <TimeField
            label="Time"
            value={state.timeValue}
            onChange={state.setTimeValue}
          />
        </Popover>
      )}
    </Box>
  );
}
