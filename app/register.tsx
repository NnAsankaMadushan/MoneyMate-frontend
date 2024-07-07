import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Register = () => {
  const infoP = Yup.object().shape({
    name: Yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  });

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [employmentStatus, setEmploymentStatus] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerReg}>
        <Link href={'/dashboard'}>
          <Icon name="close" size={25} color="#d0d0d0" />
        </Link>
        <Text style={styles.headerText}>Register</Text>
        <Link href={'/register2'} style={styles.nextText}>
          <Text>Next</Text>
        </Link>
      </View>
      <View style={styles.infoContainer}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            address: '',
            age: '',
            dateOfBirth: '',
            gender: '',
            phoneNumber: '',
          }}
          validationSchema={infoP}
          onSubmit={(values) => {
            // Handle form submission
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => (
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

              <TextInput
                style={styles.detailsR}
                placeholder="Address"
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                value={values.address}
              />
              {touched.address && errors.address && <Text style={styles.error}>{errors.address}</Text>}

              <TextInput
                style={styles.detailsR}
                placeholder="Age"
                onChangeText={handleChange('age')}
                onBlur={handleBlur('age')}
                value={values.age}
              />
              {touched.age && errors.age && <Text style={styles.error}>{errors.age}</Text>}

              <TouchableOpacity onPress={showDatePicker} style={styles.datePicker}>
                <Text style={styles.datePickerText}>
                  {values.dateOfBirth ? values.dateOfBirth : 'Select Date of Birth'}
                </Text>
              </TouchableOpacity>

              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={(date) => {
                  setFieldValue('dateOfBirth', date.toISOString().split('T')[0]);
                  hideDatePicker();
                }}
                onCancel={hideDatePicker}
                maximumDate={new Date()}
              />

              <Picker
                selectedValue={values.gender}
                style={styles.detailsR}
                onValueChange={(itemValue) => setFieldValue('gender', itemValue)}
              >
                <Picker.Item label="Select Gender" value="" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Male" value="male" />
              </Picker>
              {touched.gender && errors.gender && <Text style={styles.error}>{errors.gender}</Text>}

              <TextInput
                style={styles.detailsR}
                placeholder="Phone Number"
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
              />
              {touched.phoneNumber && errors.phoneNumber && <Text style={styles.error}>{errors.phoneNumber}</Text>}

              <Picker
                selectedValue={employmentStatus}
                style={styles.detailsR}
                onValueChange={(itemValue) => setEmploymentStatus(itemValue)}
              >
                <Picker.Item label="Employment Status (drop down)" value="" />
                <Picker.Item label="Employed" value="employed" />
                <Picker.Item label="Unemployed" value="unemployed" />
                <Picker.Item label="Self-Employed" value="self-employed" />
                <Picker.Item label="Student" value="student" />
                <Picker.Item label="Retired" value="retired" />
              </Picker>

              {/* <Button onPress={handleSubmit} title="Submit" /> */}
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  infoContainer: {
    padding: 10,
  },
  detailsReg: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  detailsR: {
    backgroundColor: '#f6f6f6',
    alignSelf: 'stretch',
    margin: 2,
    padding: 10,
    borderRadius: 10,
    fontSize: 18,
    paddingLeft: '5%',
    color: '#cdcdcd',
    marginBottom: 15,
    borderColor: '#d0d0d0',
    borderWidth: 2,
  },
  headerText: {
    color: '#000000',
    fontSize: 34,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  headerReg: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 25,
  },
  nextText: {
    fontSize: 18,
    color: '#5cb075',
    fontWeight: '500',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  datePicker: {
    width: '100%',
    backgroundColor: '#f6f6f6',
    alignSelf: 'stretch',
    margin: 2,
    padding: 10,
    borderRadius: 10,
    paddingLeft: '5%',
    color: '#cdcdcd',
    marginBottom: 15,
    borderColor: '#d0d0d0',
    borderWidth: 2,
    alignItems: 'flex-start',
  },
  datePickerText: {
    fontSize: 18,
    color: '#cdcdcd',
  },
});

export default Register;
