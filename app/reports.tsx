import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Reports = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Reports</Text>
      </View>

      <View style={styles.reportPhoto}>
        <Image source={require('../components/images/reports.png')} style={styles.reportImage} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#f8f8f8',
      alignItems: 'center',
    },
    header: {
      width: '100%',
      backgroundColor: '#5cb075',
      paddingBottom: 120,
      paddingTop: 50,
      alignItems: 'center',
    },
    headerText: {
      color: '#fff',
      fontSize: 34,
      fontWeight: 'bold',
    },
    reportPhoto: {
      alignItems: 'center',
      marginVertical: -90,
      marginBottom:20,
    },
    reportImage: {
      width: 180,
      height: 180,
      borderRadius: 90,
      marginBottom: 10,
      borderColor: '#ffffff', 
      borderWidth: 6, 
      backgroundColor:'#f7f7f7' ,
    },
  });

export default Reports