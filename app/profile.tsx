import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList,TouchableOpacity, ScrollView  } from 'react-native';
import {useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Link} from 'expo-router'

const Profile = () => {

  const [activeTab, setActiveTab] = useState('Loan History');

  const loanHistory = [
    { id: '1', title: 'Personal Loan Approved', description: 'Your personal loan of $5,000 has been approved and disbursed.', time: '2h ago' },
    { id: '2', title: 'Loan EMI Paid', description: 'Monthly EMI of $350 for your home loan has been successfully deducted.', time: '1d ago' },
    { id: '3', title: 'Auto Loan Due Reminder', description: 'Your auto loan payment of $250 is due in 5 days.', time: '3d ago' },
  ];  

  const infoP = [
    { Name: 'Asanka', Code: 'USR24001', NicNo: '981071000v', state: 'Public' }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity>
        <Link href={'/dashboard'} style={styles.headerText}>
          <Text>Back</Text>
        </Link>
      </TouchableOpacity>
        <View style={styles.profileContainer}>
          <Image source={require('../components/images/profile.png')} style={styles.profileImage} />
          <View style={styles.infoText}>
            <Text style={styles.userName}>Asanka Madushan</Text>
            <Text style={styles.userId}>USR24001</Text>
          </View>
        </View>
      </View>

      <View style={styles.tabContainer}>
        <View style={styles.tabs}>
          <TouchableOpacity 
            style={[activeTab === 'Loan History' && styles.activeTab]} 
            onPress={() => setActiveTab('Loan History')}
          >
            <Text style={[styles.inactiveTabText, activeTab === 'Loan History' && styles.tabText]}>Loan History</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tabs, activeTab === 'Profile' && styles.activeTab]} 
            onPress={() => setActiveTab('Profile')}
          >
            <Text style={[styles.inactiveTabText, activeTab === 'Profile' && styles.tabText]}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        {activeTab === 'Loan History' && (
          <View>
              <FlatList
          data={loanHistory}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
              
            <View style={styles.loanItem}>
              <View style={styles.loanHeader}>
              <View style={styles.details}>
                  <Icon name="bell" size={20} color="#5cb075" />
                  <Text style={styles.loanTitle}>{item.title}</Text>
              </View>
                <Text style={styles.loanTime}>{item.time}</Text>
              </View>
              <Text style={styles.loanDescription}>{item.description}</Text>
            </View>
          )}
        />
            {/* Repeat the above block for more items */}
          </View>
        )}
        {activeTab === 'Profile' && (
          <View style={styles.infoContainer}>
              <View>
              <FlatList
                data={infoP}
                keyExtractor={(item) => item.Code}
                renderItem={({ item }) => (
                    
                  <View style={styles.loanIintem}>
                    <Text style={styles.detailsP}>{item.Name}</Text>
                    <Text style={styles.detailsP}>{item.Code}</Text>
                    <Text style={styles.detailsP}>{item.NicNo}</Text>
                    <Text style={styles.detailsP}>{item.state}</Text>
                  </View>
                )}
              />
              </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  infoContainer:{
    padding:10
  },
  header: {
    backgroundColor: '#5cb075',
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
    // backgroundColor:'gray',
    
    borderColor: '#4CAF50',
    backgroundColor:'#fff',
    borderRadius:40,
    alignSelf: 'stretch'

  },
  activeTab: {
    padding: 20,
    color: '#4CAF50',
    borderWidth: 2,
    borderColor: '#4CAF50',
    backgroundColor:'#fff',
    borderRadius:50,
    marginRight:10,
    marginLeft:10,
  },
  inactiveTab: {
    padding: 10,
    color: '#AAAAAA',
    borderColor: '#4CAF50',
    borderRadius:40,
    marginRight:10,
    marginLeft:10,
    backgroundColor:'gray',
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
    marginLeft:25
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
  },
  loanIintem:{
    flexDirection:'column',
    alignItems:'center',
  },
  tabText:{
    color: '#4CAF50',
    fontSize:18
  },
  tabContainer:{
    padding:10,
    backgroundColor:'#fff',
    alignSelf: 'stretch'
  },
  detailsP:{
    backgroundColor:'#f6f6f6',
    alignSelf: 'stretch',
    margin:2,
    padding:10,
    borderRadius:10,
    fontSize:18,
    paddingLeft: '5%',
    color:'#cdcdcd',
    marginBottom:15,
    borderColor:'#d0d0d0',
    borderWidth:2
  },
  details:{
    flexDirection:'row',
  },
  inactiveTabText:{
    color:'#d0d0d0',
    fontSize:18
  }
});

export default Profile;
