import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";

export default App = () => (
  <View style={styles.container}>
    <ImageBackground
      source={require("./assets/background.jpg")}
      style={styles.backgroundImage}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image style={styles.logo} source={require("./assets/logo-red.png")} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View>
        <View
          style={{
            backgroundColor: "#fc5c65",
            height: 70,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "#4ECDC4",
            height: 70,
          }}
        ></View>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-between",
    paddingTop: 80,
  },
  logo: {
    height: 100,
    width: 100,
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold",
  },
});
