import { View, Text,TextInput,TouchableOpacity} from 'react-native'
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
          <Text style={styles.nextText}>Back</Text>
        </Link>
        <Text style={styles.HeadStyleText}>Make Payment</Text>
        <Link href={'/otp-verification'} style={styles.nextText}>
              <Text>Next</Text>
            </Link>
      </View>
      <View style={styles.inputContainer}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Loan Type"
          value={LoanType}
          onChangeText={setLoanType}
          editable={true}
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Loan ID"
          value={LoanID}
          onChangeText={setLoanID}
          editable={true}
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Total"
          value={Total}
          onChangeText={setTotal}
          editable={true}
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Previous Payement"
          value={PreviousPayment}
          onChangeText={setPreviousPayment}
          editable={true}
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Total Payement"
          value={TotalPayment}
          onChangeText={setTotalPayment}
          editable={true}
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Credit Balance"
          value={CreditBalance}
          onChangeText={setCreditBalance}
          editable={true}
        />
      </View>
      </View>
      {/* <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity> */}
    </View>
  )
}

export default Makepayment1