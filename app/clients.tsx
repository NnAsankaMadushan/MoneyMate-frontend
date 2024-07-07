import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, ScrollView } from 'react-native';
import styles from './style';
import { Link } from 'expo-router';

const clientsData = [
  { id: '1', name: 'Siripala', location: 'Rathnapura', price: 'Rs.19.99' },
  { id: '2', name: 'Ranathunga', location: 'Galle', price: 'Rs.19.99' },
  { id: '3', name: 'Kapila', location: 'Anuradhapura', price: 'Rs.19.99' },
  { id: '4', name: 'Siripala', location: 'Rathnapura', price: 'Rs.19.99' },
  { id: '5', name: 'Ranathunga', location: 'Galle', price: 'Rs.19.99' },
  { id: '6', name: 'Kapila', location: 'Anuradhapura', price: 'Rs.19.99' },
];

const Clients = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredClients = clientsData.filter(client =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.HeadStyle}>
        <Link href={'/dashboard'}>
          <Text style={styles.nextText}>Back</Text>
        </Link>
        <Text style={styles.HeadStyleText}>Clients</Text>
        <Text></Text>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search here..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <ScrollView
        style={styles.customScrollBar}
        contentContainerStyle={styles.customScrollBarContent}
        indicatorStyle="white" // Adjust as needed
      >
        <View style={styles.clientsContainer}>
          <Text style={styles.topClientsHeader}>Top Clients</Text>
          <View style={styles.listContainer}>
            <FlatList
              data={filteredClients}
              renderItem={({ item }) => (
                <View style={styles.clientCard}>
                  <View style={styles.clientImage} />
                  <Text style={styles.clientName}>{item.name}</Text>
                  <Text style={styles.clientLocation}>{item.location}</Text>
                  <Text style={styles.clientPrice}>{item.price}</Text>
                </View>
              )}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <Text style={styles.topClientsHeader}>New</Text>
          <View style={styles.listContainer}>
            <FlatList
              data={filteredClients}
              renderItem={({ item }) => (
                <View style={styles.clientCard}>
                  <View style={styles.clientImage} />
                  <Text style={styles.clientName}>{item.name}</Text>
                  <Text style={styles.clientLocation}>{item.location}</Text>
                  <Text style={styles.clientPrice}>{item.price}</Text>
                </View>
              )}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Clients;
