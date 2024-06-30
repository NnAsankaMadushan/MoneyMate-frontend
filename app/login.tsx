import React, { useState } from 'react';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.LoginHead}>
        <Link href={'/dashboard'}>
          <Icon name="close" size={25} color="#d0d0d0" />
        </Link>
      </View>
      <View style={styles.LoginS}>
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
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    marginTop: '5%',
    padding: 16,
  },
  LoginS: {
    verticalAlign:'middle',
    alignItems: 'center',
    // marginTop: '5%',
    paddingTop: '30%',
    // paddingBottom: '50%',
    alignSelf: 'stretch',

  },
  LoginHead: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 25,
    width: '100%',
  },
  LoginText: {
    color: 'black',
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
    alignItems: 'center',
    width: '100%',
  },
  loginButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Login;
