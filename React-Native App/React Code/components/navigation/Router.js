import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import styles from './styles';
import { createStackNavigator } from '@react-navigation/stack';


import CarsList from '../CarsList'
import Login from '../login'
import ViewScreen from '../ViewScreen'

const Stack = createStackNavigator();




const Router = () => {
    return (
        <View style={styles.container}>
              <Stack.Navigator  screenOptions={{
                 headerShown: false
                 }} >

                <Stack.Screen 
                name="login" component={Login}
                />   

                <Stack.Screen 
                name="Cars" component={CarsList}
                />
                <Stack.Screen 
                name="TeslaTequila" component={ViewScreen}
                />
              </Stack.Navigator>
        </View>
            );
        

    
};

export default Router;

