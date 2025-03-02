import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ReportItem {
  id: string;
  title: string;
  description: string;
  time: string;
}

const Reports = () => {
  const [activeTab, setActiveTab] = useState('Daily Reports');

  const DailyReports: ReportItem[] = [
    { id: '1', title: 'Electricity Bill Paid', description: 'Payment of $120 for electricity bill processed successfully.', time: '8m ago' },
    { id: '2', title: 'Water Bill Reminder', description: 'Your water bill of $45 is due in 3 days.', time: '2h ago' },
    { id: '3', title: 'Internet Bill Paid', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', time: '1d ago' },
  ];
  
  const MonthlyReports: ReportItem[] = [
    { id: '1', title: 'Total Bills Paid', description: 'You paid a total of $450 for utilities this month.', time: '2d ago' },
    { id: '2', title: 'Upcoming Rent Payment', description: 'Your rent of $1000 is due in 5 days.', time: '3d ago' },
    { id: '3', title: 'Subscription Renewal', description: 'Your Netflix subscription was renewed successfully.', time: '4d ago' },
  ];

  const renderReportItem = ({ item }: { item: ReportItem }) => (
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
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Reports</Text>
      </View>

      <View style={styles.reportPhoto}>
        <Image source={require('../components/images/reports.png')} style={styles.reportImage} />
      </View>

      <View style={styles.contentContainer}>
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

        <View style={styles.listContainer}>
          <FlatList<ReportItem>
            data={activeTab === 'Daily Reports' ? DailyReports : MonthlyReports}
            renderItem={renderReportItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    marginTop: -90,
    marginBottom: 20,
  },
  reportImage: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderColor: '#3a7f3f',
    borderWidth: 6,
    backgroundColor: '#f7f7f7',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 10,
    marginBottom: 15,
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
  listContainer: {
    flex: 1,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  loanItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: '#fff',
  },
  loanHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
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
});

export default Reports;