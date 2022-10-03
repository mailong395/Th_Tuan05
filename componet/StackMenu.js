import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

function Menu() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Menu</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function StackMenu() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  );
}
