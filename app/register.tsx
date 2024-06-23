import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Link} from 'expo-router'
import { View, Text, StyleSheet, Image, FlatList,TouchableOpacity, ScrollView,TextInput, Button,  } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
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
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
                />
                {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}
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
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
                />
                {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

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
})
export default Register