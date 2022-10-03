import { StyleSheet, View } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

export default function RatingBar({ countStar, size, color }) {
  const arrStar = ["", "", "", "", ""];

  for (let index = 0; index < arrStar.length; index++) {
    const temp = countStar - index;

    if (temp >= 1) arrStar[index] = "star";
    else if (temp < 1 && temp > 0) arrStar[index] = "star-half";
    else arrStar[index] = "star-outline";
  }

  return (
    <View style={styles.container}>
      <MaterialIcons name={arrStar[0]} size={size} color={color} />
      <MaterialIcons name={arrStar[1]} size={size} color={color} />
      <MaterialIcons name={arrStar[2]} size={size} color={color} />
      <MaterialIcons name={arrStar[3]} size={size} color={color} />
      <MaterialIcons name={arrStar[4]} size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
