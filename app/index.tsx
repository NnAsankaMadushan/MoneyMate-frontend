import React from 'react'
import {Link} from 'expo-router'
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
const Index = () => {
  return (
    <view style={styles.container}>
      <View style={styles.LoginHead} >
        <Link href={'/dashboard'}>
            <Icon name="close" size={25} color="#d0d0d0" />
        </Link>
            <Text style={styles.LoginText}>Login</Text>
                        <Text></Text>
            
        </View>
    </view>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // backgroundColor: '#f8f8f8',
    alignItems: 'center',
    marginTop:'5%'
  },
  header: {
    width: '100%',
    backgroundColor: '#5cb075',
    paddingBottom: 120,
    paddingTop: 50,
    alignItems: 'center',
  },
  LoginText: {
    color: '#black',
    fontSize: 34,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  LoginHead:{
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
  },
});

export default Index