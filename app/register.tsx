import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Link} from 'expo-router'
import { View, Text, StyleSheet, Image, FlatList,TouchableOpacity, ScrollView,TextInput, Button} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-native-datepicker';
const Register = () => {

const infoP = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');

  return (
    <View style={styles.container}>
        <View style={styles.headerReg} >
            <Icon name="close" size={25} color="#d0d0d0" />
            <Text style={styles.headerText}>Register</Text>
            {/* <Button title="Next" /> */}
            <Text  style={styles.nextText}>Next</Text>
        </View>
        <View style={styles.infoContainer}>
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            infoP={infoP}
            onSubmit={(values) => {
            // Handle form submission
            console.log(values);
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View>
                <TextInput
                style={styles.detailsR}
                placeholder="Name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                />
                {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}

                <TextInput
                style={styles.detailsR}
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
                />
                {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

                {/* <TextInput
                style={styles.detailsR}
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
                />
                {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>} */}
                <TextInput
                style={styles.detailsR}
                placeholder="Address"
                onChangeText={handleChange('address')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
                />
                {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}
                <TextInput
                style={styles.detailsR}
                placeholder="Age"
                onChangeText={handleChange('age')}
                onBlur={handleBlur('age')}
                value={values.age}
                secureTextEntry
                />
                {touched.age && errors.age && <Text style={styles.error}>{errors.age}</Text>}
                <TextInput
                style={styles.detailsR}
                placeholder="Date of Birth"
                onChangeText={handleChange('dateOfBirth')}
                onBlur={handleBlur('dateOfBirth')}
                value={values.dateOfBirth}
                secureTextEntry
                />
                {touched.dateOfBirth && errors.dateOfBirth && <Text style={styles.error}>{errors.dateOfBirth}</Text>}
                <TextInput
                style={styles.detailsR}
                placeholder="Gender"
                onChangeText={handleChange('gender')}
                onBlur={handleBlur('gender')}
                value={values.gender}
                secureTextEntry
                />
                {touched.gender && errors.gender && <Text style={styles.error}>{errors.gender}</Text>}
                <TextInput
                style={styles.detailsR}
                placeholder="Phone Number"
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
                secureTextEntry
                />
                {touched.phoneNumber && errors.phoneNumber && <Text style={styles.error}>{errors.phoneNumber}</Text>}
                
                
                <View>
                <Picker
                  selectedValue={employmentStatus}
                  style={styles.detailsR}
                  onValueChange={(itemValue, itemIndex) => setEmploymentStatus(itemValue)}
                >
                  <Picker.Item label="Employment Status (drop down)" value="" />
                  <Picker.Item label="Employed" value="employed" />
                  <Picker.Item label="Unemployed" value="unemployed" />
                  <Picker.Item label="Self-Employed" value="self-employed" />
                  <Picker.Item label="Student" value="student" />
                  <Picker.Item label="Retired" value="retired" />
                </Picker>
              </View>

              <DatePicker
       style={styles.datePicker}
        date={dateOfBirth}
        mode="date"
        placeholder="Select Date of Birth"
        format="YYYY-MM-DD"
        minDate="1900-01-01"
        maxDate={new Date()}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 40,
            borderWidth: 0,
          },
        }}
        onDateChange={(date) => {
          setDateOfBirth(date);
        }}
      />

                <Button onPress={handleSubmit} title="Submit" />
            </View>
            )}
      </Formik>
        </View>
    </View>
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
        fontSize:18,
        paddingLeft: '5%',
        color:'#cdcdcd',
        marginBottom:15,
        borderColor:'#d0d0d0',
        borderWidth:2,
        // justifyContent:'flex-start',
        alignItems:'flex-start'
      },
      input: {
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 10,
      },
      pickerContainer: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
      },
})
export default Register