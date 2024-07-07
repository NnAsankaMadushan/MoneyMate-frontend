import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Reports = () => {
  const [activeTab, setActiveTab] = useState('Daily Reports');

  const DailyReports = [
    { id: '1', title: 'Header', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', time: '8m ago' },
    { id: '2', title: 'Header', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', time: '8m ago' },
    { id: '3', title: 'Header', description: 'jhgvgv.', time: '8m ago' },
  ];
  const MonthlyReports = [
    { id: '1', title: 'Header', description: 'hiiiiiiiiiiiiiiiiiiiiiiiiiiiii.', time: '8m ago' },
    { id: '2', title: 'Header', description: 'hiiiiiiiiiiiiiiiiiiiiiiiiiiiii.', time: '8m ago' },
    { id: '3', title: 'Header', description: 'hiiiiiiiiiiiiiiiiiiiiiiiiiiiii.', time: '8m ago' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Reports</Text>
      </View>

      <View style={styles.reportPhoto}>
        <Image source={require('../components/images/reports.png')} style={styles.reportImage} />
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'Daily Reports' && styles.activeTab]} 
          onPress={() => setActiveTab('Daily Reports')}
        >
          <Text style={[styles.inactiveTabText, activeTab === 'Daily Reports' && styles.tabText]}>Daily Reports</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'Monthly Reports' && styles.activeTab]} 
          onPress={() => setActiveTab('Monthly Reports')}
        >
          <Text style={[styles.inactiveTabText, activeTab === 'Monthly Reports' && styles.tabText]}>Monthly Reports</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {activeTab === 'Daily Reports' && (
          <FlatList
            data={DailyReports}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.loanItem}>
                <View style={styles.loanHeader}>
                  <View style={styles.details}>
                    <Icon name="file" size={20} color="#5cb075" />
                    <Text style={styles.loanTitle}>{item.title}</Text>
                  </View>
                  <Text style={styles.loanTime}>{item.time}</Text>
                </View>
                <Text style={styles.loanDescription}>{item.description}</Text>
              </View>
            )}
          />
        )}
        {activeTab === 'Monthly Reports' && (
          <FlatList
            data={MonthlyReports}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.loanItemM}>
                <View style={styles.loanHeader}>
                  <View style={styles.details}>
                    <Icon name="file" size={20} color="#5cb075" />
                    <Text style={styles.loanTitle}>{item.title}</Text>
                  </View>
                  <Text style={styles.loanTime}>{item.time}</Text>
                </View>
                <Text style={styles.loanDescription}>{item.description}</Text>
              </View>
            )}
          />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  reportPhoto: {
    alignItems: 'center',
    marginVertical: -90,
    marginBottom: 0,
  },
  reportImage: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 10,
    borderColor: '#ffffff', 
    borderWidth: 6, 
    backgroundColor:'#f7f7f7',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 10,
    alignSelf: 'stretch',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 40,
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: '#fff',
    borderWidth: 2,
  },
  inactiveTabText: {
    color: '#d0d0d0',
    fontSize: 18,
  },
  tabText: {
    color: '#4CAF50',
    fontSize: 18,
  },
  loanItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
    width: '100%',
  },
  loanItemM: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
    width: '100%',
  },
  loanHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loanTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  loanTime: {
    fontSize: 14,
    color: '#AAAAAA',
  },
  loanDescription: {
    marginTop: 5,
    fontSize: 16,
    color: '#555555',
    marginLeft: 25,
  },
  details: {
    flexDirection: 'row',
  },
});

export default Reports;
