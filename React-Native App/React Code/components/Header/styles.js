import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        zIndex: 100, // To get content on top of the screen
        flexDirection: 'row', // get the two images in one row
        justifyContent: 'space-between',
        width: '100%', 
        paddingHorizontal: 20, 
    },
    logo:{
        width:100,
        height: 20, 
        resizeMode: 'contain'// get content on top of the screen

    },
    menu:{
        width:25,
        height: 25, 
        resizeMode:'contain',       
    },

});

export default styles;