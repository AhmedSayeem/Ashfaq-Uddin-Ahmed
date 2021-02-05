import React from 'react';
import {View, Text, Pressable} from 'react-native'; 
import styles from './styles'

const StyledButton = (props) => {
    


    //Destructure the above code ES6 feature
    const {type, content, onPress } = props;
  
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6'; // background color of button changed if type is changed from primary to secondary 
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';
    

    return (
      <View style={[styles.container, {backgroundColor:backgroundColor}]}>
        <Pressable
            style={styles.button}
            onPress={() => onPress()}
        >
            <Text style={[styles.text, {color:textColor}]}>{content}</Text>

        </Pressable>
      </View> 

    );
};

export default StyledButton; 