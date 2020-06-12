// ========= DETECTING ORIENTATION CHANGES LESSON =========== //

// import React from "react";
// import {
//   StyleSheet,
//   Button,
//   Alert,
//   Dimensions,
//   SafeAreaView,
//   Platform,
//   StatusBar,
//   View,
// } from "react-native";
// import {
//   useDimensions,
//   useDeviceOrientation,
// } from "@react-native-community/hooks";

// export default function App() {
//   const { landscape } = useDeviceOrientation();
//   return (
//     <SafeAreaView style={styles.container}>
//       <View
//         style={{
//           backgroundColor: "dodgerblue",
//           width: "100%",
//           height: landscape ? "100%" : "30%",
//         }}
//       ></View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//     // justifyContent: "center",
//     // alignItems: "center",
//   },
// });

// ========= END DETECTING ORIENTATION CHANGES LESSON =========== //

// ========= FLEXBOX LESSON =========== //

// import React from "react";
// import { View } from "react-native";

// export default function App() {
//   return (
//     <View
//       style={{
//         backgroundColor: "#fff",
//         flex: 1,
//       }}
//     >
//       <View
//         style={{
//           backgroundColor: "dodgerblue",
//           flex: 2,
//         }}
//       />
//       <View
//         style={{
//           backgroundColor: "gold",
//           flex: 1,
//         }}
//       />
//       <View
//         style={{
//           backgroundColor: "tomato",
//           flex: 1,
//         }}
//       />
//     </View>
//   );
// }

// ========= END FLEXBOX LESSON =========== //

// ========= FLEXBOX DIRECTION LESSON =========== //
// ReactNative lays up views vertically - aligns the items vertically in a container bc of default portrait position of phone screen

// import React from "react";
// import { View } from "react-native";

// export default function App() {
//   return (
//     <View
//       style={{
//         backgroundColor: "#fff",
//         flex: 1,
//         // this prop determines the flexbox direction of the children Views
//         flexDirection: "column-reverse",
//       }}
//     >
//       <View
//         style={{
//           backgroundColor: "dodgerblue",
//           height: 100,
//           width: 100,
//         }}
//       />
//       <View
//         style={{
//           backgroundColor: "gold",
//           height: 100,
//           width: 100,
//         }}
//       />
//       <View
//         style={{
//           backgroundColor: "tomato",
//           height: 100,
//           width: 100,
//         }}
//       />
//     </View>
//   );
// }

// ========= END FLEXBOX DIRECTION LESSON =========== //

// ========= FLEXBOX justifyContent, alignItems, and alignSelf LESSON =========== //
// Aligning items in a container

// import React from "react";
// import { View } from "react-native";

// export default function App() {
//   return (
//     <View
//       style={{
//         backgroundColor: "#fff",
//         flex: 1,
//         // this prop determines the flexbox direction of the children Views
//         flexDirection: "row", // horizontal
//         justifyContent: "center", // main axis
//         alignItems: "center", // secondary axis
//       }}
//     >
//       <View
//         style={{
//           backgroundColor: "dodgerblue",
//           height: 300,
//           width: 100,
//           alignSelf: "flex-start",
//         }}
//       />
//       <View
//         style={{
//           backgroundColor: "gold",
//           height: 200,
//           width: 100,
//         }}
//       />
//       <View
//         style={{
//           backgroundColor: "tomato",
//           height: 100,
//           width: 100,
//         }}
//       />
//     </View>
//   );
// }

// ========= END FLEXBOX justifyContent, alignItems, and alignSelf LESSON =========== //

// ========= FLEXBOX flexWrap, alignContent LESSON =========== //
// Wrappping items and aligning content

// import React from "react";
// import { View, SafeAreaView } from "react-native";

// export default function App() {
//   return (
//     // Container view
//     <SafeAreaView
//       style={{
//         backgroundColor: "#fff",
//         flex: 1,
//         // this prop determines the flexbox direction of the children Views
//         flexDirection: "row", // horizontal
//         justifyContent: "center", // main axis
//         alignItems: "center", // secondary axis. This aligns the items within each row.
//         alignContent: "center", //  determines the alignment of the entire content. Wrapping is required for this.
//         flexWrap: "wrap",
//       }}
//     >
//       <View
//         style={{
//           backgroundColor: "dodgerblue",
//           height: 300,
//           width: 100,
//         }}
//       />
//       <View
//         style={{
//           backgroundColor: "gold",
//           height: 100,
//           width: 100,
//         }}
//       />
//       <View
//         style={{
//           backgroundColor: "tomato",
//           height: 100,
//           width: 100,
//         }}
//       />
//       <View
//         style={{
//           backgroundColor: "grey",
//           height: 100,
//           width: 100,
//         }}
//       />
//       <View
//         style={{
//           backgroundColor: "greenyellow",
//           height: 100,
//           width: 100,
//         }}
//       />
//     </SafeAreaView>
//   );
// }

// ========= END FLEXBOX flexWrap, alignContent LESSON =========== //

// ========= FLEXBOX flexBasis, flexGrow and flexShrink LESSON =========== //

// import React from "react";
// import { View, SafeAreaView } from "react-native";

// export default function App() {
//   return (
//     // Container view
//     <SafeAreaView
//       style={{
//         backgroundColor: "#fff",
//         flex: 1,
//         // this prop determines the flexbox direction of the children Views
//         flexDirection: "row", // horizontal
//         justifyContent: "center", // main axis
//         alignItems: "center", // secondary axis. This aligns the items within each row.
//       }}
//     >
//       <View
//         style={{
//           backgroundColor: "dodgerblue",
//           // flexBasis: 100, // maps to width or height depending on primary (main) axis
//           // flexGrow: 1, // same as flex property
//           flexShrink: 1, // handles shrinking this item so that other items can fit on the screen
//           height: 100,
//           width: 400,
//         }}
//       />
//       <View
//         style={{
//           backgroundColor: "gold",
//           height: 100,
//           width: 100,
//         }}
//       />
//       <View
//         style={{
//           backgroundColor: "tomato",
//           height: 100,
//           width: 100,
//         }}
//       />
//     </SafeAreaView>
//   );
// }

// ========= END FLEXBOX flexBasis, flexGrow and flexShrink LESSON =========== //

// ========= ABSOLUTE AND RELATIVE POSITIONING =========== //
// By default, ReactNative sets all component positions to relative

// import React from "react";
// import { View, SafeAreaView } from "react-native";

// export default function App() {
//   return (
//     // Container view
//     <SafeAreaView
//       style={{
//         backgroundColor: "#fff",
//         flex: 1,
//         // this prop determines the flexbox direction of the children Views
//         flexDirection: "row", // horizontal
//         justifyContent: "center", // main axis
//         alignItems: "center", // secondary axis. This aligns the items within each row.
//       }}
//     >
//       <View
//         style={{
//           backgroundColor: "dodgerblue",
//           height: 100,
//           width: 100,
//         }}
//       />
//       <View
//         style={{
//           backgroundColor: "gold",
//           height: 100,
//           width: 100,
//           top: 20,
//           left: 20,
//           // position: "absolute",
//         }}
//       />
//       <View
//         style={{
//           backgroundColor: "tomato",
//           height: 100,
//           width: 100,
//         }}
//       />
//     </SafeAreaView>
//   );
// }

// ========= END ABSOLUTE AND RELATIVE POSITIONING LESSON =========== //

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

// import React from "react";
// import {
//   SafeAreaView,
//   ImageBackground,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   StatusBar,
// } from "react-native";

// export default App = () => (
//   <View style={styles.container}>
//     <StatusBar backgroundColor="black" barStyle="light-content" />
//     <View
//       style={{
//         flex: 0.4,
//         backgroundColor: "black",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         paddingLeft: 30,
//         paddingRight: 30,
//         paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 40,
//       }}
//     >
//       <View style={{ backgroundColor: "#fc5c65", height: 50, width: 50 }} />
//       <View style={{ backgroundColor: "#4ECDC4", height: 50, width: 50 }} />
//     </View>
//     <Image
//       style={{
//         // resizeMode: "contain",
//         width: "auto",
//         flex: 2,
//       }}
//       source={require("./assets/chair.jpg")}
//     />
//     <View style={styles.actionRow}></View>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 30,
//     // justifyContent: "center",
//     // alignItems: "center",
//   },
//   actionRow: {
//     flex: 0.5,
//     backgroundColor: "black",
//   },
// });
