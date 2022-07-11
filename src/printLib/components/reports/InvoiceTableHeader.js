import React from 'react';
import {Text, View, StyleSheet,Image } from '@react-pdf/renderer';
import Door from "./Door.png";
import Section from "./section.png";
import Entrance from "./entrance.png";
import Date from "./date.png";

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        backgroundColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
    },
    description: {
        width: '40%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    qty: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    sold: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    rate: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    amount: {
        width: '15%'
    },
    
  image:{
      width:50,
      height:20,
  }
  });

  const InvoiceTableHeader = () => (
    <View style={styles.container}>
        <Text style={styles.description}> <Image style={styles.image} src={Door} /></Text>
        <Text style={styles.qty}> <Image style={styles.image} src={Door} /></Text>
        <Text style={styles.sold}> <Image style={styles.image} src={Section} /></Text>
        <Text style={styles.rate}> <Image style={styles.image} src={Entrance} /></Text>
        <Text style={styles.amount}> <Image style={styles.image} src={Date} /></Text>
    </View>
  );
  
  export default InvoiceTableHeader