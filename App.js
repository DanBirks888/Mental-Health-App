import React from "react";
import styles from "./landingPageStyles";
import wallpapers, { leavesWithMoreBlack } from "./landingPageWallpapers";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
  Image,
  Alert,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <ImageBackground
      source={wallpapers.leavesWithMoreBlack}
      style={styles.backgroundImage}
    >
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
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}
