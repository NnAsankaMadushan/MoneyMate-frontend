// Profile.js

import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const Profile = () => {
  const loanHistory = [
    { id: '1', title: 'Header', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', time: '8m ago' },
    { id: '2', title: 'Header', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', time: '8m ago' },
    { id: '3', title: 'Header', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', time: '8m ago' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
            <Image source={require('../components/images/profile.png')} style={styles.profileImage} />
        </View>
        <Text style={styles.userName}>Kasuni Rumesha</Text>
        <Text style={styles.userId}>USR24001</Text>
      </View>
      <View style={styles.tabs}>
        <Text style={styles.activeTab}>Loan History</Text>
        <Text style={styles.inactiveTab}>Profile</Text>
      </View>
      <FlatList
        data={loanHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.loanItem}>
            <View style={styles.loanHeader}>
              <Text style={styles.loanTitle}>{item.title}</Text>
              <Text style={styles.loanTime}>{item.time}</Text>
            </View>
            <Text style={styles.loanDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userName: {
    marginTop: 10,
    fontSize: 24,
    color: '#FFFFFF',
  },
  userId: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
  },
  activeTab: {
    padding: 10,
    color: '#4CAF50',
    borderBottomWidth: 2,
    borderColor: '#4CAF50',
  },
  inactiveTab: {
    padding: 10,
    color: '#AAAAAA',
  },
  loanItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
  },
  loanHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loanTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loanTime: {
    fontSize: 14,
    color: '#AAAAAA',
  },
  loanDescription: {
    marginTop: 5,
    fontSize: 16,
    color: '#555555',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 0,
    marginBottom:0,
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
});

export default Profile;
