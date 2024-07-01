import { View, Text,TextInput} from 'react-native'
import React, { useState } from 'react'
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from 'expo-router';

const Makepayment1 = () => {
  const [LoanType,setLoanType] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.HeadStyle}>
        <Link href={'/makepayment'}>
          <Icon name="close" size={25} color="#d0d0d0" />
        </Link>
        <Text style={styles.HeadStyleText}>Make Payment</Text>
        <Link href={'/makepayment1'} style={styles.nextText}>
              <Text>Next</Text>
            </Link>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Loan Type"
          value={LoanType}
          onChangeText={setLoanType}
          editable={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Loan ID"
          value={LoanType}
          onChangeText={setLoanType}
          editable={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Total"
          value={LoanType}
          onChangeText={setLoanType}
          editable={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Previous Payement"
          value={LoanType}
          onChangeText={setLoanType}
          editable={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Total Payement"
          value={LoanType}
          onChangeText={setLoanType}
          editable={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Credit Balance"
          value={LoanType}
          onChangeText={setLoanType}
          editable={true}
        />
      </View>
    </View>
  )
}

export default Makepayment1