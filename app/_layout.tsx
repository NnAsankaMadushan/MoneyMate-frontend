import React from 'react';
import { Link, Slot, useRouter } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RootLayout = () => {
  const router = useRouter();
  const currentRoute = router.asPath;

  const hideNavigationBarRoutes = ['/login'];

  const shouldHideNavigationBar = hideNavigationBarRoutes.includes(currentRoute);

  return (
    <View style={styles.container}>
      <Slot />
      {!shouldHideNavigationBar && (
        <View style={styles.navigationBar}>
          <View style={styles.navi}>
            <TouchableOpacity style={styles.navItem}>
              <Link href={'/'}>
                <Icon name="home" size={30} color="#5cb075" style={styles.icons} />
              </Link>
              <Text style={styles.naviText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
              <Link href={'/register'}>
                <Icon name="user-plus" size={30} color="#5cb075" style={styles.icons} />
              </Link>
              <Text style={styles.naviText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
              <Link href={'/dashboard'}>
                <Icon name="users" size={30} color="#5cb075" style={styles.icons} />
              </Link>
              <Text style={styles.naviText}>Clients</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
              <Link href={'/reports'}>
                <Icon name="file" size={30} color="#5cb075" style={styles.icons} />
              </Link>
              <Text style={styles.naviText}>Reports</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
              <Link href={'/profile'}>
                <Icon name="user" size={30} color="#5cb075" style={styles.icons} />
              </Link>
              <Text style={styles.naviText}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  navigationBar: {
    width: '100%',
    backgroundColor: "#f6f6f6",
    height: 90,
    padding: 10,
    borderColor: '#c9c9c9',
    borderTopWidth: 1,
  },
  navi: {
    justifyContent: 'space-around',
    flexDirection: "row",
    alignItems: 'center',
    padding: 5,
  },
  naviText: {
    color: '#5cb075',
    fontSize: 18,
  },
  icons: {
    marginRight: 15,
    color: '#5cb075',
  },
  navItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default RootLayout;
