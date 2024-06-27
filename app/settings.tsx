import { View, Text, StyleSheet, TextInput,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { Link, Slot } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';

const Settings = () => {
    const [loanRate,setLoanRate] = useState('');
    const [newAdmin,setNewAdmin] = useState('');
    const [collector,setCollector] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.settingsHead} >
        <Link href={'/dashboard'}>
            <Icon name="close" size={25} color="#d0d0d0" />
        </Link>
            <Text style={styles.settingsText}>Settings</Text>
            {/* <Button title="Next" /> */}
              <Text></Text>
        </View>
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            placeholder="Change loan rate"
            value={loanRate}
            onChangeText={setLoanRate}
            editable={false}
            />
            <TextInput
                style={styles.input}
                placeholder="Add new Admin"
                value={newAdmin}
                onChangeText={setNewAdmin}
                editable={false}
            />
            <TextInput
                style={styles.input}
                placeholder="Add collector"
                value={collector}
                onChangeText={setCollector}
                editable={false}
            />
            <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    container:{
        marginTop:15,
    },
    settingsHead:{
        alignItems:'center',
        justifyContent:"space-between",
        flexDirection:'row',
        paddingLeft:15,
        paddingRight:15,
        marginBottom:25
      },
      settingsText: {
        color: '#black',
        fontSize: 34,
        fontWeight: 'bold',
        alignItems: 'center',
      },
      inputContainer:{
        padding:10
      },
      input:{
        backgroundColor: '#f0f0f0',
        padding: 16,
        borderRadius: 8,
        marginVertical: 8,
        fontSize: 16,
        color: '#a0a0a0',
      },
      saveButton: {
        backgroundColor: '#5cb075',
        padding: 16,
        borderRadius: 8,
        marginVertical: 16,
        alignItems: 'center',
      },
      saveButtonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
      },
});