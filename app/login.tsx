import React, { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password.');
      return;
    }

    console.log('Username:', username);
    console.log('Password:', password);

    router.push('/dashboard');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
     
      <View style={styles.LoginS}>
      <View>
      <Image
          source={require('../assets/images/shape.png')} 
          style={styles.shape}
        />
      </View>
      <Image
          source={require('../assets/images/brand.png')} 
          style={styles.brand}
        />
        <Text style={styles.LoginText}>Login</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Link href={'/dashboard'} style={styles.loginButtonL}>
          <View style={styles.loginButton}>
              <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
          </View>
          </Link>
        </View>
      </View>
      <Image
          source={require('../assets/images/log.png')} 
          style={styles.log}
        />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  LoginS: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  LoginHead: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
  },
  LoginText: {
    color: '#5cb075',
    fontSize: 34,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    fontSize: 16,
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#5cb075',
    padding: 16,
    borderRadius: 8,
    marginVertical: 16,
  },
  loginButtonL:{
    display:"flex",
  },
  loginButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  shape:{

    marginRight:500
  },
  log:{
    width:"100%",
    height:"50%",
    marginRight:-150,
    marginBottom:-70

  },
  brand:{
    height:110,
    width:250,
    marginBottom:50
  }
});

export default Login;
