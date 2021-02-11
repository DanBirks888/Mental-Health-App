import React from 'react';
import styles from './styleSheets';
import { piccy } from './images';
import {
  Text,
  View,
  TextInput,
  Button,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <ImageBackground source={piccy.leaves} style={styles.backgroundImage}>
      <View style={styles.pad}>
        <Text style={styles.title}>Mental Health Application</Text>
        <Image
          source={require('./images/brainLogoBlue.png')}
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
        />
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}
