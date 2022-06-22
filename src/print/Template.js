import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
   
} from '@react-pdf/renderer';
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  DataTableCell,
} from "@david.kucsai/react-pdf-table";
import ReactPDF from '@react-pdf/renderer';
import { Box, Heading } from '@chakra-ui/react';

import Sold from './sold.png';
import Door from './Door.png';
import Section from './Section.png';
import Entrance from './Entrance.png';
import Concerned from './Concerned.png';
import Taxpayer from './Taxpayer.png';
import Note from './Note.png';
import Date from './Date.png';
import Time from './Time.png';

import Requafont from './Requa.ttf';
// Register Font
Font.register({
  family: ' Requa',
  src: 'https://fonts.googleapis.com/css2?family=Cairo:wght@200&family=Changa&family=Raleway:wght@500&display=swap',
});

// Create styles
const styles = StyleSheet.create({
  page: {
    width: 400,
  
    backgroundColor: 'white',
  },
  section: {
    width: 400,
    margin: 10,
    padding: 10,
  },
  document: {
    width: 400,
  },
  th: {
    width: 600,
    height: 30,
    backgroundColor: 'tomato',
  },
  image: { width: 35, height: 30 },
});

// Create Template Component
const Template = ({
  totalsold,
  time,
  date,
  balance,
  operation,
  customer,
  paperone,
  papertwo,
  papertree,
  paperfour,
  coinone,
  cointwo,
  cointree,
  coinsix,
}) => {
  return (
    <Document style={styles.document}>
      <Page size="A4" style={styles.page}>
        <View
          style={{
            width: '100%',
            height: '30px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Image style={styles.image} src={Sold} />

          <Image style={styles.image} src={Door} />
        </View>

        <Table        >
          <TableHeader textAlign={'center'}>
            <TableCell weighting={0.3}>First Name</TableCell>
            <TableCell weighting={0.3}>Last Name</TableCell>
            <TableCell>    <Image style={styles.image} src={Door} /> </TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Phone Number</TableCell>
          </TableHeader>
          <TableBody>
          <TableCell>Phone Number</TableCell>
          </TableBody>
        </Table>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Page>
    </Document>
  );
};

export default Template;
