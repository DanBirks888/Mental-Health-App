import React from "react";
import styles from "./styleSheets";
import { piccy } from "./images";
import {
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <ImageBackground source={piccy.leaves} style={styles.backgroundImage}>
      <View style={styles.pad}>
        <Text style={styles.title}>Mental Health Application</Text>
        <Text style={styles.normalText}>Log In</Text>
        <View style={styles.loginInfo}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="white"
            style={styles.input}
          />
          <Button title="confirm" styles={styles.confirmBtn} />
        </View>
        <View style={styles.loginInfo}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="white"
            style={styles.input}
          />
          <Button title="confirm" styles={styles.confirmBtn} />
        </View>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}
