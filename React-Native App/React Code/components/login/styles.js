import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d10000",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "60%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 3,
    padding: 10,
    marginLeft: 10,
  },
 
forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 50,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    backgroundColor: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase"
  },
});

export default styles;