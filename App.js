import React from "react";
import Screen from "./app/components/Screen";
// ========= DETECTING ORIENTATION CHANGES LESSON =========== //
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

// ========= BORDERS =========== //
// import { View } from "react-native";

// export default function App() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <View
//         style={{
//           backgroundColor: "dodgerblue",
//           width: 100,
//           height: 100,
//           borderWidth: 10,
//           borderColor: "royalblue",
//           borderRadius: 50,
//         }}
//       ></View>
//     </View>
//   );
// }
// ========= END BORDERS LESSON =========== //

// ========= SHADOWS =========== //
// import { View } from "react-native";

// export default function App() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <View
//         style={{
//           backgroundColor: "dodgerblue",
//           width: 100,
//           height: 100,
//           // iOS properties
//           shadowColor: "grey",
//           shadowOffset: { width: 0, height: 10 },
//           shadowOpacity: 1,
//           shadowRadius: 10,
//           // android properties
//           elevation: 20,
//         }}
//       ></View>
//     </View>
//   );
// }
// ========= END SHADOWS LESSON =========== //

// ========= PADDINGS & MARGINS =========== //
// import { View } from "react-native";

// export default function App() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <View
//         style={{
//           backgroundColor: "dodgerblue",
//           width: 100,
//           height: 100,
//           padding: 20,
//           paddingHorizontal: 10,
//           paddingVertical: 10,
//         }}
//       >
//         <View
//           style={{
//             backgroundColor: "gold",
//             width: 50,
//             height: 50,
//           }}
//         ></View>
//       </View>
//       <View
//         style={{
//           backgroundColor: "tomato",
//           width: 100,
//           height: 100,
//           margin: 20,
//         }}
//       ></View>
//     </View>
//   );
// }
// ========= END PADDINGS & MARGINS LESSON =========== //

// ========= STYLING TEXT =========== //
// import { View, Text } from "react-native";

// export default function App() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text
//         style={{
//           color: "tomato",
//           fontFamily: "Avenir",
//           fontSize: 30,
//           fontStyle: "italic",
//           fontWeight: "700",
//           lineHeight: 70,
//           textAlign: "center",
//           textTransform: "capitalize",
//           // textDecorationLine: "line-through",
//         }}
//       >
//         I love React Native. This is my first React Native app. Here's some more
//         text.
//       </Text>
//     </View>
//   );
// }
// ========= END STYLING TEXT LESSON =========== //

// ========= ENCAPSULATING TEXT =========== //
// import { View } from "react-native";

// import AppText from "./app/components/AppText";

// export default function App() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <AppText
//         style={{
//           color: "tomato",
//           fontFamily: "Avenir",
//           fontSize: 30,
//           fontStyle: "italic",
//           fontWeight: "700",
//           lineHeight: 70,
//           textAlign: "center",
//           textTransform: "capitalize",
//           // textDecorationLine: "line-through",
//         }}
//       >
//         I love React Native. This is my first React Native app. Here's some more
//         text.
//       </AppText>
//     </View>
//   );
// }
// ========= END ENCAPSULATING TEXT LESSON =========== //

// ========= ICONS =========== //
// import { View } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// export default function App() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <MaterialCommunityIcons name="email" size={200} color="dodgerblue" />
//     </View>
//   );
// }
// ========= END ICONS LESSON =========== //

// ========= PLATFORM SPECIFIC CODE =========== //
// import { View } from "react-native";

// import AppText from "./app/components/AppText";

// export default function App() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <AppText>
//         I love React Native. This is my first React Native app. Here's some more
//         text.
//       </AppText>
//     </View>
//   );
// }
// ========= END PLATFORM SPECIFIC CODE LESSON =========== //

// ========= FLATLIST =========== //
import { Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
      }}
    />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({ title: route.params.id })}
    />
  </Stack.Navigator>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={Tweets} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
// ========= END FLATLIST LESSON =========== //
