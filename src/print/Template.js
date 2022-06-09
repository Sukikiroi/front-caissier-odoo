import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import { Box, Heading } from '@chakra-ui/react';

// Create styles
const styles = StyleSheet.create({
  page: {
    width: 400,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  section: {
    width: 400,
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  document:{
    width: 400,
   
  }
});

// Create Template Component 
const Template = ({time,date,balance,operation,customer,paperone,papertwo,papertree,paperfour,coinone,cointwo,cointree,coinsix}) => {
  return (
       

    
    <Document style={styles.document}>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text> {time} Time</Text>
      </View>
      <View style={styles.section}>
        <Text>{date}Date</Text>
      </View>
    </Page>
  </Document>
 
  )
}

export default Template