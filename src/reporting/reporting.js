import React from 'react'
import { Box } from '@chakra-ui/react'
import { faker } from '@faker-js/faker';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Doughnut } from 'react-chartjs-2';
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
      <p>one!</p>
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