import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const TextInANest = () => {
  const title = useState("Dear Me");

  export default function App() {
    return (
      <View style={StyleSheet.title}>
        <View>
          <Text>Dear Me</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
  });
};
