import { View, Text,TextInput} from 'react-native'
import React, { useState } from 'react'
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from 'expo-router';

const Makepayment1 = () => {
  const [LoanType,setLoanType] = useState('');
  const [LoanID,setLoanID] = useState('');
  const [Total,setTotal] = useState('');
  const [PreviousPayment,setPreviousPayment] = useState('');
  const [TotalPayment,setTotalPayment] = useState('');
  const [CreditBalance,setCreditBalance] = useState('');
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
          value={LoanID}
          onChangeText={setLoanID}
          editable={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Total"
          value={Total}
          onChangeText={setTotal}
          editable={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Previous Payement"
          value={PreviousPayment}
          onChangeText={setPreviousPayment}
          editable={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Total Payement"
          value={TotalPayment}
          onChangeText={setTotalPayment}
          editable={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Credit Balance"
          value={CreditBalance}
          onChangeText={setCreditBalance}
          editable={true}
        />
      </View>
    </View>
  )
}

export default Makepayment1