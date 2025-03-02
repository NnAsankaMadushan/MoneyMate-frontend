import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';
import styles from './style';

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const router = useRouter();

  const handleProceed = () => {
    if (otp.length === 4) {
      Alert.alert(
        "Success",
        "Payment completed successfully!",
        [
          {
            text: "OK",
            onPress: () => router.replace('/dashboard')
          }
        ]
      );
    } else {
      Alert.alert("Error", "Please enter a valid 4-digit OTP");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.HeadStyle}>
        <TouchableOpacity onPress={() => router.back()}>
          <Link href={'/makepayment1'}>
            <Text style={styles.nextText}>Back</Text>
          </Link>
          
        </TouchableOpacity>
        <Text style={styles.HeadStyleText}>OTP Verification</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.otpContainer}>
        <Text style={styles.otpTitle}>Enter OTP</Text>
        <Text style={styles.otpDescription}>
          Please enter the 4-digit code sent to your registered mobile number
        </Text>
        
        <TextInput
          style={styles.otpInput}
          placeholder="Enter 4-digit OTP"
          value={otp}
          onChangeText={setOtp}
          keyboardType="numeric"
          maxLength={4}
          secureTextEntry
        />

        <TouchableOpacity 
          style={[
            styles.proceedButton,
            { opacity: otp.length === 4 ? 1 : 0.7 }
          ]} 
          onPress={handleProceed}
        >
          <Link href={"/dashboard"}>
            <Text style={styles.proceedButtonText}>Proceed</Text>
          </Link>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn't receive OTP? </Text>
          <Text style={styles.resendButton}>Resend</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtpVerification;
