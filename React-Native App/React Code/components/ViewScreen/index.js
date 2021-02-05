import React from 'react';

import {useNavigation} from '@react-navigation/native'; 
// import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Button,
  Linking,
} from 'react-native';


const ViewScreen = () => {
const navigation = useNavigation(); 
return (

    <SafeAreaView style={styles.container}>
      <ImageBackground
      
        source={require('./black.jpeg')}
        style={styles.backImage} 
      
      >


        <View style={styles.container}>
          
        <Button
        title="Go Back" style={styles.backButton}
        onPress={() => navigation.navigate('Cars')}
      />
          



          <View style={styles.centerContentStyle}>
       
          <TouchableOpacity onPress={() => {
                Linking.openURL('https://shop.tesla.com/product/tesla-tequila');
            }}>
            <Image
              source={require('./tesla-taquila.jpg')}
              style={{ width: 600, height: 600, marginTop:20,}}
            />
            </TouchableOpacity>
            
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default ViewScreen;
const styles = StyleSheet.create({
  container: {
    
   padding:10,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  backImage:{
    width:'100%',
    position:'absolute',
    height: Dimensions.get('window').height,
  },
  titleStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 5,
    color : 'white',
    
    
  },
  backButton: {
    color: 'white',
    

  },
  centerContentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});