import { Button, StyleSheet, Text, View } from "react-native";

export default function PageHome({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Screen4a"
        onPress={() => navigation.navigate("Screen4a")}
      />
      <Button
        title="Screen4b"
        onPress={() => navigation.navigate("Screen4b")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
