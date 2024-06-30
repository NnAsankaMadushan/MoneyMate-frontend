import { View, Text,TextInput} from 'react-native'
import React, { useState } from 'react'
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from 'expo-router';

const Makepayment = () => {
    const [nicNo,setNicNo] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.HeadStyle}>
        <Link href={'/dashboard'}>
          <Icon name="close" size={25} color="#d0d0d0" />
        </Link>
        <Text style={styles.HeadStyleText}>Make Payment</Text>
        <Link href={'/register2'} style={styles.nextText}>
              <Text>Next</Text>
            </Link>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="User ID/NIC"
          value={nicNo}
          onChangeText={setNicNo}
          editable={true}
        />
      </View>
    </View>
  )
}

export default Makepayment