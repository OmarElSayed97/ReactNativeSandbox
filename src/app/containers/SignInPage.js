/* eslint-disable prettier/prettier */
import React from 'react';
import normalize from 'react-native-normalize';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export default function SignInPage() {
  const [usernameValue, setUsername] = React.useState('Username');
  const [passwordValue, setPassword] = React.useState('Password');
  return (
    <ImageBackground
      source={require('../assets/SignInPage/bg.png')}
      style={styles.background}>
      <View style={styles.upperBar}>
      <TouchableOpacity style={styles.backButton}>
        <Image
        source={require('../assets/SignInPage/back.png')}
        style= {styles.backImage}/>
      </TouchableOpacity>
      <Text style= {styles.text2}>Sign In</Text>
      </View>
      <View style={styles.container}>
        <Image
        source={require('../assets/SignInPage/logo.png')}
        style={styles.logo} />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setUsername(text)}
          value={usernameValue}
          onFocus={() => setUsername('')}
        />
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={passwordValue}
          onFocus={() => setPassword('')}
        />
        <TouchableOpacity
        style= {styles.forgotPassButton}>
          <Text style= {styles.text3}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}>
        <Text style= {styles.text}>Sign in</Text>
       </TouchableOpacity>
       <View style={styles.lowerBar}>
       <Text style= {styles.text4}>Don't have an account?</Text>
       <TouchableOpacity
        style= {styles.signUpButton}>
          <Text style= {styles.text5}>Sign up now</Text>
        </TouchableOpacity>
       </View>
      
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  upperBar:{
    flexDirection: 'row',
    flex: 1,
    alignItems:'center',
  },
  lowerBar:{
    flexDirection: 'row',
    marginTop: normalize(30),
  },
  container: {
    flex: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderBottomWidth: 2,
    borderColor: '#FAD000',
    width: normalize(250),
    height: normalize(50),
    color: '#FFFFFF',
    fontFamily: 'LTAroma',
  },
  logo:{
    width: normalize(220),
    height: normalize(120),
    marginBottom: normalize(50),
  },
  text:{
    fontFamily: 'LTAroma',
    color: '#000',
    fontSize: 20,
  },
  text2:{
    fontFamily: 'LTAroma',
    color: '#FFFF',
    fontSize: 15,
    marginLeft: normalize(120),
  },
  text3:{
    fontFamily: 'LTAroma',
    color: '#FFFF',
    fontSize: 13,
  },
  text4:{
    fontFamily: 'LTAroma',
    color: '#FFFF',
    fontSize: 13,
  },
  text5:{
    fontFamily: 'LTAroma',
    color: '#FAD000',
    fontSize: 13,
  },
  forgotPassButton:{
    marginTop: normalize(10),
    marginLeft: normalize(140),
  },
  signUpButton:{
    marginLeft: normalize(5),
  },
  button:{
    backgroundColor: '#FAD000',
    width: normalize(120),
    height: normalize(40),
    marginTop: normalize(25),
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,

  },
  backButton:{
    margin: normalize(15),
    width: normalize(25),
    height: normalize(25),
  },
  backImage:{
    width: normalize(22),
    height: normalize(22),
  },
});
