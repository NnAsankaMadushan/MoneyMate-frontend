import React, { useState } from 'react';
import { View, TextInput, Button, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Register2() {
  const [nic, setNic] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [employerName, setEmployerName] = useState('');
  const [frontId, setFrontId] = useState(null);
  const [backId, setBackId] = useState(null);
  const [shopImage, setShopImage] = useState(null);

  const pickImage = async (setImage) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);  // Access the URI properly
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerReg}>
        <Link href={'/dashboard'}>
          <Text style={styles.nextText}>Back</Text>
        </Link>
        <Text style={styles.headerText}>Register</Text>
        <Link href={'/register2'} style={styles.nextText}>
          <Text>Next</Text>
        </Link>
      </View>
      <View style={styles.InputR}>
        <TextInput
          style={styles.detailsR}
          placeholder="NIC"
          value={nic}
          onChangeText={setNic}
        />
        <TextInput
          style={styles.detailsR}
          placeholder="Job title"
          value={jobTitle}
          onChangeText={setJobTitle}
        />
        <TextInput
          style={styles.detailsR}
          placeholder="Employer Name"
          value={employerName}
          onChangeText={setEmployerName}
        />
        <Text style={styles.detailsR}>Upload a Photo of ID</Text>
        <View style={styles.uploadContainer}>
          <TouchableOpacity style={styles.uploadBox} onPress={() => pickImage(setFrontId)}>
            {frontId ? (
              <Image source={{ uri: frontId }} style={styles.image} />
            ) : (
              <Text style={styles.uploadText}>Front</Text>
              // <Icon name="file-upload" size={24} color="#d3d3d3"/>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.uploadBox} onPress={() => pickImage(setBackId)}>
            {backId ? (
              <Image source={{ uri: backId }} style={styles.image} />
            ) : (
              <Text style={styles.uploadText}>Back</Text>
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.shopUpload} onPress={() => pickImage(setShopImage)}>
          {shopImage ? (
            <Image source={{ uri: shopImage }} style={styles.image} />
          ) : (
            <Text style={styles.uploadText}>Shop image upload</Text>
          )}
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  uploadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  uploadBox: {
    width: '48%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#f6f6f6',
    borderColor: '#d0d0d0',
    borderWidth: 2,
    color: '#cdcdcd',
  },
  uploadText: {
    color: '#d3d3d3',
    fontSize:18,
  },
  shopUpload: {
    margin: 2,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f6f6f6',
    borderColor: '#d0d0d0',
    borderWidth: 2,
    color: '#cdcdcd',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    height:100
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
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
    color: '#000',
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
  button: {
    backgroundColor: '#5cb075',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 16,
    justifyContent: 'flex-end',
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  InputR:{
    flex:1
  }
});
