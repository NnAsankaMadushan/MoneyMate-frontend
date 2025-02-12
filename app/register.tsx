import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
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
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
              password: '',
              confirmPassword: '',
              age: '',
              dateOfBirth: '',
              gender: '',
              phoneNumber: '',
            }}
            validationSchema={infoP}
            onSubmit={(values) => {
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
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

                <TextInput
                  style={styles.detailsR}
                  placeholder="Confirm Password"
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  secureTextEntry
                />
                {touched.confirmPassword && errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword}</Text>}

                <TextInput
                  style={styles.detailsR}
                  placeholder="Age"
                  onChangeText={handleChange('age')}
                  onBlur={handleBlur('age')}
                  value={values.age}
                  keyboardType="numeric"
                />
                {touched.age && errors.age && <Text style={styles.error}>{errors.age}</Text>}

                <TouchableOpacity onPress={showDatePicker} style={styles.datePicker}>
                  <Text style={styles.detailsR}>
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
                  keyboardType="phone-pad"
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
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  headerReg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  headerText: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  infoContainer: {
    paddingBottom: 20,
  },
  detailsR: {
    backgroundColor: '#f6f6f6',
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    borderColor: '#d0d0d0',
    borderWidth: 1,
  },
  nextText: {
    fontSize: 18,
    color: '#5cb075',
    fontWeight: '500',
  },
  datePicker: {
    padding: 10,
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    borderColor: '#d0d0d0',
    borderWidth: 1,
    marginBottom: 15,
  },
  datePickerText: {
    fontSize: 16,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});

export default Register;
