import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { Link, Slot } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';

const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.settingsHead} >
        <Link href={'/dashboard'}>
            <Icon name="close" size={25} color="#d0d0d0" />
        </Link>
            <Text style={styles.settingsText}>Settings</Text>
            {/* <Button title="Next" /> */}
              <Text></Text>
        </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    container:{
        marginTop:15,
    },
    settingsHead:{
        alignItems:'center',
        justifyContent:"space-between",
        flexDirection:'row',
        paddingLeft:15,
        paddingRight:15,
        marginBottom:25
      },
      settingsText: {
        color: '#black',
        fontSize: 34,
        fontWeight: 'bold',
        alignItems: 'center',
      },
});