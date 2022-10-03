import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function OneItem({ item, onPress, backgroundColor, textColor }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <View>
        <Image source={item.urlImage} />
      </View>
      <View style={styles.textContent}>
        <Text style={{ marginBottom: 12 }}>{item.name}</Text>
        <Text style={textColor}>
          <Text style={[{ color: "#7D5B5B" }, textColor]}>Shop: </Text>
          {item.nameShop}
        </Text>
      </View>
      <View style={styles.backgroundButton}>
        <TouchableOpacity style={styles.buttonChat}>
          <Text style={{ color: "white" }}>Chat</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 4,
  },
  textContent: {
    flex: 1.2,
    paddingLeft: 10,
  },
  backgroundButton: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonChat: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: "#F31111",
  },
});
