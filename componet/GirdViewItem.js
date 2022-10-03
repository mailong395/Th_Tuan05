import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RatingBar from "./ratingBar";

export default function GrirdViewItem({ item }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={{
          width: 155,
          height: 90,
          resizeMode: "stretch",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        source={item.image}
      />
      <Text
        style={{
          flex: 1,
          marginVertical: 6,
          marginHorizontal: 4,
        }}
      >
        {item.name}
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <RatingBar countStar={item.countStar} size={18} color={"#FBE41B"} />
        <Text style={{ fontSize: 12 }}>({item.countTest})</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontWeight: "bold" }}> {item.price} </Text>
        <Text style={{ color: "#969DAA" }}> {item.discord} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 6,
    marginVertical: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
});
