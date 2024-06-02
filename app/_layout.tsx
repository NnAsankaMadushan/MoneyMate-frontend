import React from 'react'
import { Link, Slot } from 'expo-router'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const RootLayout = () => {
  return (
  <View className='relative w-full flex-1'>
    <Slot />
    <View style={styles.navigationBar}>
        <View style={styles.navi}>
          
            <TouchableOpacity style={styles.menuItem}>
            <Link href={'/'}>
                <Icon name="home" size={30} color="#5cb075" style={styles.icons} />
            </Link>
                <Text style={styles.naviText}>Home</Text>
              </TouchableOpacity>
          
         
            <TouchableOpacity style={styles.menuItem}>
            <Link href={'/register'}>
                <Icon name="user-plus" size={30} color="#5cb075" style={styles.icons} />
            </Link>
                <Text style={styles.naviText}>Register</Text>
              </TouchableOpacity>
          
          
            <TouchableOpacity style={styles.menuItem}>
            <Link href={'/clients'}>
                <Icon name="users" size={30} color="#5cb075" style={styles.icons} />
            </Link>
                <Text style={styles.naviText}>Clients</Text>
              </TouchableOpacity>
         
          
            <TouchableOpacity style={styles.menuItem}>
            <Link href={'/reports'}>
                <Icon name="file" size={30} color="#5cb075" style={styles.icons} />
            </Link>
                <Text style={styles.naviText}>Reports</Text>
              </TouchableOpacity>
      
          
            <TouchableOpacity style={styles.menuItem}>
            <Link href={'/dashboard'}>
                <Icon name="user" size={30} color="#5cb075" style={styles.icons} />
            </Link>
                <Text style={styles.naviText}>Profile</Text>
              </TouchableOpacity>
          
            


        </View>
    </View>
  </View> 
  );
};

const styles = StyleSheet.create({
  navigationBar:{
    width:'100%',
    backgroundColor:"#5cb075",
    zIndex:50,
    height:90,
    padding:10
  },
  navi:{
    justifyContent: 'space-around',
    flexDirection:"row",
    alignItems: 'center', 
    padding:5
  },
  naviText:{
    color: '#fff',
    fontSize:18,
  },
  icons:{
    marginRight: 15,
    color:'#fff',
  },
  menuItem: {
    flexDirection: 'column', 
    alignItems: 'center',
  },

});

export default RootLayout