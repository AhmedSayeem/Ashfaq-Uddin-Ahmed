import React from 'react';
import {View, Text, ImageBackground, Linking} from 'react-native'; 
import styles from './styles';
import StyledButton from '../StyledButton'
import {useNavigation} from "@react-navigation/native";

const CarItem = (props) => {
   const navigation = useNavigation();
  const {name, tagline, image, taglineCTA, link} = props.car; 
  
  return (
        <View style={styles.carContainer}>


        <ImageBackground
          source ={image}
          style={styles.image}
        
        />
        <View style = {styles.titles}>

          <Text style ={styles.title}>{name}</Text>
          <Text style = {styles.subtitle}>
            
            {tagline}
            {' '}  
            <Text style={styles.subtitleCTA}>
              {taglineCTA}
            </Text>
          
          </Text>

        </View>


        <View style={styles.buttonsContainer}> //One Button for all
          
        <View style={styles.button1}>
        <StyledButton type='primary'
            content= {"Custom Order"}
            onPress={() => {
                Linking.openURL(link);
            }}
        />
        </View>

        <View style={styles.button2}>
        <StyledButton type='secondary'
            content= {"Existing Invetory"}
            onPress={() => {
               navigation.navigate('TeslaTequila');
            }}
        />
        </View>
      </View>

      </View>

    );
};

export default CarItem; 