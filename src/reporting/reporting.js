import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { faker } from '@faker-js/faker';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {curveCatmullRom} from 'd3-shape';
import {
  XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  LineSeriesCanvas
} from 'react-vis';
//import '../node_modules/react-vis/dist/style.css';
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
 const data = {
    labels,
    datasets: [
      {
        type: 'line' ,
        label: 'Dataset 1',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      },
      {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: 'rgb(75, 192, 192)',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'white',
        borderWidth: 2,
      },
      {
        type: 'bar' ,
        label: 'Dataset 3',
        backgroundColor: 'rgb(53, 162, 235)',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      },
    ],
  };

const Reporting = () => {
  const [useCanvas, setuseCanvas] = useState(false)
  
  const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
  const Line = useCanvas ? LineSeriesCanvas : LineSeries;
  return (
    <Box bg='green.50' w='100%' p={4} color='black'>
      
  <Tabs variant='enclosed'>
  <TabList>
    <Tab>المصاريف</Tab>
    <Tab>المداخيل</Tab>
    <Tab>الغلق</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
    <XYPlot width={500} height={500}>
    <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis />
          <YAxis />
          <ChartLabel 
            text="الأيام"
            className="alt-x-label"
            includeMargin={false}
            xPercent={0.025}
            yPercent={1.01}
            />

          <ChartLabel 
            text="د جX100"
            className="alt-y-label"
            includeMargin={false}
            xPercent={0.06}
            yPercent={0.06}
            style={{
              transform: 'rotate(-90)',
              textAnchor: 'end'
            }}
            />
          <Line
            className="first-series"
            data={[{x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 15}, {x: 4, y: 12}]}
          />
        
       
    </XYPlot>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
  </Box>
  )
}

export default Reporting