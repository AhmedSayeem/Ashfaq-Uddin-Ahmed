import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
  
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },

  titles:{
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },

  title:{
    //Tesla Model S
    fontSize: 40,
    fontWeight:'500',
  },

  subtitle:{
    //Starting at $69,669.
    fontSize: 16,
    color: '#5c5e62',

  },

  subtitleCTA: {
    textDecorationLine: 'underline',
    
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },

  buttonsContainer:{
    position: 'absolute',
    bottom: 50,
    width: '100%',
    
   
  },
  
  button1:{
    padding:7,
  },
  button2:{
   
    padding: 7,
    
  },

  
  
    
    
});

export default styles;