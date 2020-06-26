import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton.android";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={Platform.OS === "android" ? 2 : 9}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="LOGIN" onPress={() => console.log("Tapped")} />
        <AppButton
          title="REGISTER"
          color="secondary"
          onPress={() => console.log("Tapped")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
