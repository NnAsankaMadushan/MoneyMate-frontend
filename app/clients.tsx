import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import styles from './style';
const clientsData = [
  { id: '1', name: 'Siripala', location: 'Rathnapura', price: 'Rs.19.99' },
  { id: '2', name: 'Ranathunga', location: 'Galle', price: 'Rs.19.99' },
  { id: '3', name: 'Kapila', location: 'Anuradhapura', price: 'Rs.19.99' },
];

const Clients = () => {
  return (
    <View style={styles.container}>
      <View style={styles.HeadStyle}>
        <Text style={styles.nextText}>Back</Text>
        <Text style={styles.HeadStyleText}>Clients</Text>
        <Text></Text>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search here..."
      />
      <View style={styles.clientsContainer}>
        <Text style={styles.topClientsHeader}>Top Clients</Text>
        <View style={styles.topClientsContainer}>
          <FlatList
            data={clientsData}
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
          />
        </View>
        <Text style={styles.topClientsHeader}>New</Text>
        <FlatList
          data={clientsData}
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
        />
      </View>
    </View>
  );
};

export default Clients;
