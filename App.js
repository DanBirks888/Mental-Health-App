import { StatusBar } from "expo-status-bar";
import React, { cloneElement, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
  Image,
  Alert,
} from "react-native";

const images = [require("./images/leavesBackground.jpg")];

export default function App() {
  return (
    <ImageBackground source={images[0]} style={styles.backgroundImage}>
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

let styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    height: undefined,
    width: undefined,
    resizeMode: "contain",
  },
  pad: {
    padding: 50,
  },
  title: {
    fontSize: 30,
    paddingVertical: 20,
    color: "white",
    textAlign: "center",
  },
  normalText: {
    fontSize: 20,
    paddingVertical: 20,
    color: "white",
    textAlign: "center",
  },
  loginInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: "white",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "white",
  },
  input: {
    flex: 2,
    color: "white",
    placeholder: "Email",
  },
  confirmBtn: {
    flex: 1,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
});
