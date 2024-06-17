// Profile.js

import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import {useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
  const loanHistory = [
    { id: '1', title: 'Header', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', time: '8m ago' },
    { id: '2', title: 'Header', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', time: '8m ago' },
    { id: '3', title: 'Header', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', time: '8m ago' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerText}>Back</Text>
        <View style={styles.profileContainer}>
          <Image source={require('../components/images/profile.png')} style={styles.profileImage} />
          <View style={styles.infoText}>
            <Text style={styles.userName}>Kasuni Rumesha</Text>
            <Text style={styles.userId}>USR24001</Text>
          </View>
        </View>
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
            <View style={styles.headerBell}>
                <Icon name="bell" size={20} color="#5cb075" />
                <Text style={styles.loanTitle}>{item.title}</Text>
            </View>
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
  },
  userName: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight:600,
  },
  userId: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  tabs: {
    alignItems:'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
    width:180,
    backgroundColor:'#f6f6f6',
    borderRadius:40
  },
  activeTab: {
    padding: 20,
    color: '#4CAF50',
    borderBottomWidth: 2,
    borderColor: '#4CAF50',
    backgroundColor:'#fff',
    borderRadius:40
  },
  inactiveTab: {
    padding: 10,
    color: '#AAAAAA',
    borderColor: '#4CAF50',
    borderRadius:40
  },
  loanItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
    // flexDirection:'row'
  },
  loanHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loanTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:5
  },
  loanTime: {
    fontSize: 14,
    color: '#AAAAAA',
    justifyContent: 'flex-end',
  },
  loanDescription: {
    marginTop: 5,
    fontSize: 16,
    color: '#555555',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
    borderColor: '#fff', 
    borderWidth: 5,
    backgroundColor:'#fff' 
  },
  infoText: {
    flexDirection: 'column',
  },
    headerText:{
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom:15,
  },
  headerBell:{
    flexDirection:'row',

  }
});

export default Profile;
