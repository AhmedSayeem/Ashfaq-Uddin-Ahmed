import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Login = () =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/images/logo1.png')}/>
 
      <StatusBar style="auto"/>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email   "
          placeholderTextColor="#d10000"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password   "
          placeholderTextColor="#d10000"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity
       style={styles.loginBtn} onPress={() =>navigation.navigate('Cars') }>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;