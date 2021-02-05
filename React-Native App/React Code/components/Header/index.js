import React from 'react'; 
import {View, Image, TouchableOpacity} from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';
import {useNavigation} from '@react-navigation/native'; 

const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
           <TouchableOpacity onPress={() => console.warn (' Logo Clicked') }>
           <Image style={styles.logo} source ={require('../../assets/images/logo.png')} />
           </TouchableOpacity>              

           <TouchableOpacity onPress={() => navigation.navigate('TeslaTequila') }>  
            <Image style={styles.menu} source ={require('../../assets/images/menu.png')} />
            </TouchableOpacity>      
        </View>

    );
};

export default Header;