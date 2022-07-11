import React from 'react';
import {Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import Spending from "./spending.png"
const styles = StyleSheet.create({
   
    titleContainer:{
        flexDirection: 'row',
        marginTop: 24,
    },
    reportTitle:{
        color: '#61dafb',
        letterSpacing: 4,
        fontSize: 25,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    image:{
        width:100,
        height:60,
    }
  });


  const InvoiceTitle = ({title}) => (
    <View style={styles.titleContainer}>
      
      <Image style={styles.image} src={Spending}/>
    </View>
  );
  
  export default InvoiceTitle