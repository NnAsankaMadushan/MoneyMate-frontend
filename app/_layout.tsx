import { View, Text } from 'react-native'
import React from 'react'
import { Link, Slot } from 'expo-router'

const RootLayout = () => {
  return (
  <View className='relative w-full flex-1'>
    <Slot />
    <View className="w-full absolute h-16 bottom-0 left-0 z-50 bg-green-500 flex-row items-center justify-center">
        <View>
            <Link href={'/dashboard'}>Dashboard</Link>
        </View>
    </View>
  </View> 
  );
};

export default RootLayout