import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Link} from 'expo-router'
import { View, Text, StyleSheet, Image, FlatList,TouchableOpacity, ScrollView  } from 'react-native';
const Register = () => {

const infoP = [
    { Name: 'Saman', Code: 'USR24001', NicNo: '981071000v', state: 'Public' }
    ];
  return (
    <View style={styles.container}>
        <View style={styles.headerReg}>
            <Icon name="close" size={25} color="#d0d0d0" />
            <Text style={styles.headerText}>Register</Text>
            <Text style={styles.nextText}>Next</Text>
        </View>
        <View style={styles.infoContainer}>
            <View>
            <FlatList
            data={infoP}
            keyExtractor={(item) => item.Code}
            renderItem={({ item }) => (
                
                <View style={styles.detailsReg}>
                <Text style={styles.detailsR}>{item.Name}</Text>
                <Text style={styles.detailsR}>{item.Code}</Text>
                <Text style={styles.detailsR}>{item.NicNo}</Text>
                <Text style={styles.detailsR}>{item.state}</Text>
                </View>
            )}
            />
            </View>
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
      }
})
export default Register


// import React from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { Formik } from 'formik';
// import * as Yup from 'yup';

// const validationSchema = Yup.object().shape({
//   name: Yup.string()
//     .required('Name is required')
//     .min(2, 'Name must be at least 2 characters'),
//   email: Yup.string()
//     .email('Invalid email')
//     .required('Email is required'),
//   password: Yup.string()
//     .required('Password is required')
//     .min(6, 'Password must be at least 6 characters'),
// });

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Formik
//         initialValues={{ name: '', email: '', password: '' }}
//         validationSchema={validationSchema}
//         onSubmit={(values) => {
//           // Handle form submission
//           console.log(values);
//         }}
//       >
//         {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
//           <View>
//             <TextInput
//               style={styles.input}
//               placeholder="Name"
//               onChangeText={handleChange('name')}
//               onBlur={handleBlur('name')}
//               value={values.name}
//             />
//             {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}

//             <TextInput
//               style={styles.input}
//               placeholder="Email"
//               onChangeText={handleChange('email')}
//               onBlur={handleBlur('email')}
//               value={values.email}
//               keyboardType="email-address"
//             />
//             {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

//             <TextInput
//               style={styles.input}
//               placeholder="Password"
//               onChangeText={handleChange('password')}
//               onBlur={handleBlur('password')}
//               value={values.password}
//               secureTextEntry
//             />
//             {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

//             <Button onPress={handleSubmit} title="Submit" />
//           </View>
//         )}
//       </Formik>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingLeft: 10,
//   },
//   error: {
//     color: 'red',
//     marginBottom: 10,
//   },
// });

// export default App;
