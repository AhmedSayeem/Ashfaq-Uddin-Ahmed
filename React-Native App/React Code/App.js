import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  View } from 'react-native';
import CarsList from './components/CarsList'
import Header from './components/Header'

import { NavigationContainer } from '@react-navigation/native';
import Router from './components/navigation/Router';
import Login from './components/login';
import ViewScreen from './components/ViewScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Router/>
      
      </NavigationContainer>
        
 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  
  
});
