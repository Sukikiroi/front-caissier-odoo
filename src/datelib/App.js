import "./styles.css";
import { DateRangePicker } from "./DateRangePicker";
import { DatePicker } from "./DatePicker";
import { today, now, getLocalTimeZone } from "@internationalized/date";
import { OverlayContainer } from "@react-aria/overlays";
import { ChakraProvider, Box, Heading, Link } from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraProvider>
      <OverlayContainer>
        <Box marginLeft="12">
        
       
          
          <DateRangePicker
            label="Date and time range"
            minValue={today(getLocalTimeZone())}
            defaultValue={{
              start: now(getLocalTimeZone()),
              end: now(getLocalTimeZone()).add({ weeks: 1 })
            }}
          />
        </Box>
      </OverlayContainer>
    </ChakraProvider>
  );
}
