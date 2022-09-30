import { StyleSheet, Text, View } from "react-native";
import Screen4a from "./compunet/4a";
import Screen4b from "./compunet/4b";

export default function App() {
  return (
    <View style={styles.container}>
      <Screen4a />
      {/* <Screen4b /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C4C4C4",
  },
});
