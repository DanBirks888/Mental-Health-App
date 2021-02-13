import React from 'react';
import styles from '../assets/styleSheets';
import { piccy } from '../assets/images';
import {
  Image,
  View,
  Text,
  TextInput,
  ImageBackground,
  Button,
  StatusBar,
} from 'react-native';

export default class Login extends React.Component {
  static navigationOPtions = ({ navigation }) => {
    return {
      title: navigation.getParam('name'),
    };
  };
  render() {
    const { navigate, state } = this.props.navigation;
    return (
      <ImageBackground source={piccy.leaves} style={styles.backgroundImage}>
        <View style={styles.pad}>
          <Image
            source={require('../assets/dearMe.png')}
            style={styles.titleLogo}
          />
          <Image
            source={require('../assets/brainLogoBlue.png')}
            style={styles.logo}
          />
          <Text style={styles.normalText}>Log In</Text>
          <View style={styles.loginInfo}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="white"
              style={styles.input}
            />
          </View>
          <View style={styles.loginInfo}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="white"
              style={styles.input}
            />
          </View>
          <Button
            title="confirm"
            color={'rgba(1000, 1000, 1000, 0.3)'}
            styles={styles.confirmBtn}
            onPress={() => navigate('Home')}
          />
        </View>
      </ImageBackground>
    );
  }
}
