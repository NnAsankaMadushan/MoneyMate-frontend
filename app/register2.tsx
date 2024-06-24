import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Link} from 'expo-router'
import { View, Text, StyleSheet, Image, FlatList,TouchableOpacity, ScrollView,TextInput, Button} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Formik } from 'formik';
const Register2 = () => {
  return (
    <View></View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    infoContainer:{
        padding:10
      },
    detailsReg:{
    flexDirection:'column',
    alignItems:'center',
    },
    detailsR:{
        backgroundColor:'#f6f6f6',
        alignSelf: 'stretch',
        margin:2,
        padding:10,
        borderRadius:10,
        fontSize:18,
        paddingLeft: '5%',
        color:'#cdcdcd',
        marginBottom:15,
        borderColor:'#d0d0d0',
        borderWidth:2
      },
      headerText: {
        color: '#black',
        fontSize: 34,
        fontWeight: 'bold',
        alignItems: 'center',
      },
      headerReg:{
        alignItems:'center',
        justifyContent:"space-between",
        flexDirection:'row',
        paddingLeft:15,
        paddingRight:15,
        marginBottom:25
      },
      nextText:{
        fontSize:18,
        color:'#5cb075',
        fontWeight:500
      },
      error: {
            color: 'red',
            marginBottom: 10,
          },
      datePicker: {
        width: '100%',
        // marginBottom: 12,
        backgroundColor:'#f6f6f6',
        alignSelf: 'stretch',
        margin:2,
        padding:10,
        borderRadius:10,
        paddingLeft: '5%',
        color:'#cdcdcd',
        marginBottom:15,
        borderColor:'#d0d0d0',
        borderWidth:2,
        // justifyContent:'flex-start',
        alignItems:'flex-start',
      },
      input: {
        borderColor: 'gray',
        borderWidth: 1,
        // marginBottom: 12,
        paddingLeft: 10,
      },
      pickerContainer: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
      },
})
export default Register2