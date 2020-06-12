import React from "react";
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
} from "react-native";

export default App = () => (
  <View style={styles.container}>
    <StatusBar backgroundColor="black" barStyle="light-content" />
    <View
      style={{
        flex: 0.4,
        backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 40,
      }}
    >
      <View style={{ backgroundColor: "#fc5c65", height: 50, width: 50 }} />
      <View style={{ backgroundColor: "#4ECDC4", height: 50, width: 50 }} />
    </View>
    <Image
      style={{
        // resizeMode: "contain",
        width: "auto",
        flex: 2,
      }}
      source={require("./assets/chair.jpg")}
    />
    <View style={styles.actionRow}></View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 30,
    // justifyContent: "center",
    // alignItems: "center",
  },
  actionRow: {
    flex: 0.5,
    backgroundColor: "black",
  },
});
