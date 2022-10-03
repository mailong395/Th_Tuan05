import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Screen4a from "./4a";
import Screen4b from "./4b";
import PageHome from "./HomePage";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <View style={styles.mainInputText}>
      <View style={styles.inputTextBackground}>
        <FontAwesome name="search" size={24} color="black" />
        <TextInput placeholder="Search" style={styles.inputText} />
      </View>
      <MaterialCommunityIcons name="cart-check" size={24} color="white" />
    </View>
  );
}

export default function StackHome() {
  return (
    <Stack.Navigator screenOptions={{ headerTintColor: "white" }}>
      <Stack.Screen
        name="Home"
        component={PageHome}
        options={{ headerTintColor: "black" }}
      />

      <Stack.Screen
        name="Screen4a"
        component={Screen4a}
        options={{
          title: "Chat",
          headerRight: () => (
            <MaterialCommunityIcons name="cart-check" size={24} color="white" />
          ),
          headerStyle: { backgroundColor: "#1BA9FF" },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Screen4b"
        component={Screen4b}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: () => (
            <Entypo name="dots-three-horizontal" size={24} color="white" />
          ),
          headerStyle: { backgroundColor: "#1BA9FF" },
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  mainInputText: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -14,
  },
  inputTextBackground: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: 192,
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: "#fff",
    marginRight: 20,
  },
  inputText: {
    flex: 1,
    marginLeft: 10,
  },
});
