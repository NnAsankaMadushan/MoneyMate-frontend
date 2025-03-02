import React, { useState, useEffect } from 'react';
import { Link, Slot, usePathname } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const RootLayout = () => {
  const pathname = usePathname();
  const hideNavigationBarRoutes = ['/', '/login'];
  const shouldHideNavigationBar = hideNavigationBarRoutes.includes(pathname);

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  // Fix TypeScript error by adding a type annotation for the route parameter
  const getIconColor = (route: string): string => {
    return pathname === route ? '#11bd64' : '#789687'; // Green for active page, gray for others
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Slot />
      {!shouldHideNavigationBar && !isKeyboardVisible && (
        <View style={styles.navigationBar}>
          <View style={styles.navi}>
            <TouchableOpacity style={styles.navItem}>
              <Link href={'/dashboard'}>
                <Icon name="home" size={22} solid color={getIconColor('/dashboard')} style={styles.icons} />
              </Link>
              <Text style={[styles.naviText, { color: getIconColor('/dashboard') }]}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
              <Link href={'/register'}>
                <Icon name="user-edit" size={22} solid color={getIconColor('/register')} style={styles.icons} />
              </Link>
              <Text style={[styles.naviText, { color: getIconColor('/register') }]}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
              <Link href={'/clients'}>
                <Icon name="user-friends" size={22} solid color={getIconColor('/clients')} style={styles.icons} />
              </Link>
              <Text style={[styles.naviText, { color: getIconColor('/clients') }]}>Clients</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
              <Link href={'/reports'}>
                <Icon name="chart-bar" size={22} solid color={getIconColor('/reports')} style={styles.icons} />
              </Link>
              <Text style={[styles.naviText, { color: getIconColor('/reports') }]}>Reports</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
              <Link href={'/profile'}>
                <Icon name="user-circle" size={22} solid color={getIconColor('/profile')} style={styles.icons} />
              </Link>
              <Text style={[styles.naviText, { color: getIconColor('/profile') }]}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigationBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#f8f8f8',
    height: 80,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  navi: {
    justifyContent: 'space-around',
    flexDirection: "row",
    alignItems: 'center',
    padding: 5,
  },
  naviText: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: '500',
  },
  icons: {
    alignSelf: 'center',
  },
  navItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
  },
});

export default RootLayout;