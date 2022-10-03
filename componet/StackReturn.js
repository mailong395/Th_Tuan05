import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

function Return() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Return</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function StackReturn() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Return" component={Return} />
    </Stack.Navigator>
  );
}
