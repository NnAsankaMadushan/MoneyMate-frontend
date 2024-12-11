import React, { useState, useEffect } from 'react';
import { Link, Slot, usePathname } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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

  const getIconColor = (route) => {
    return pathname === route ? '#5cb075' : '#000'; // Green for active page, black for others
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
                <Icon name="home" size={25} color={getIconColor('/dashboard')} style={styles.icons} />
              </Link>
              <Text style={[styles.naviText, { color: getIconColor('/dashboard') }]}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
              <Link href={'/register'}>
                <Icon name="user-plus" size={25} color={getIconColor('/register')} style={styles.icons} />
              </Link>
              <Text style={[styles.naviText, { color: getIconColor('/register') }]}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
              <Link href={'/clients'}>
                <Icon name="users" size={25} color={getIconColor('/clients')} style={styles.icons} />
              </Link>
              <Text style={[styles.naviText, { color: getIconColor('/clients') }]}>Clients</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
              <Link href={'/reports'}>
                <Icon name="file" size={25} color={getIconColor('/reports')} style={styles.icons} />
              </Link>
              <Text style={[styles.naviText, { color: getIconColor('/reports') }]}>Reports</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
              <Link href={'/profile'}>
                <Icon name="user" size={25} color={getIconColor('/profile')} style={styles.icons} />
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
    backgroundColor: '#f6f6f6',
    height: 90,
    borderTopWidth: 1,
    borderTopColor: '#c9c9c9',
    padding: 10,
  },
  navi: {
    justifyContent: 'space-around',
    flexDirection: "row",
    alignItems: 'center',
    padding: 5,
  },
  naviText: {
    fontSize: 18,
  },
  icons: {
    marginRight: 15,
  },
  navItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default RootLayout;
