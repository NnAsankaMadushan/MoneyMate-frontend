import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link, Slot } from 'expo-router';

const Dashboard = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
      </View>

      <View style={styles.profileContainer}>
        <Image source={require('../components/images/profile.png')} style={styles.profileImage} />
        <Text style={styles.greeting}>Good Morning</Text>
        <Text style={styles.username}>Kasuni</Text>
      </View>
      
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="user-plus" size={30} color="#5cb075" style={styles.icons} />
          <Text style={styles.menuText}>Create User</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Link href={'/reports'}>
            <Icon name="line-chart" size={30} color="#5cb075" style={styles.icons} />
            <Text style={styles.menuText}>Reports</Text>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Link href={'/makepayment'}>
            <Icon name="credit-card" size={30} color="#5cb075" style={styles.icons} />
            <Text style={styles.menuText}>Make Payments</Text>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Link href={'/settings'}>
            <Icon name="cogs" size={30} color="#5cb075" style={styles.icons} />
            <Text style={styles.menuText}>Settings</Text>
            </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="users" size={30} color="#5cb075" style={styles.icons} />
          <Text style={styles.menuText}>Clients</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="user" size={30} color="#5cb075" style={styles.icons} />
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    backgroundColor: '#5cb075',
    paddingBottom: 120,
    paddingTop: 50,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: -90,
    marginBottom:20,
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 10,
    borderColor: '#3a7f3f', 
    borderWidth: 5,
    backgroundColor:'#fff'     
  },
  greeting: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 24,
    fontWeight: '500',
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  menuItem: {
    width: '49%',
    backgroundColor: '#f6f6f6',
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: 'row',   
  },
  menuText: {
    marginTop: 10,
    fontSize: 16,
    color: '#93c4a4',
  },

  icons:{
    marginRight: 15
  }
});

export default Dashboard;
