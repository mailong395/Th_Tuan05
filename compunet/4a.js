import React, { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

const DATA = [
  {
    id: 1,
    name: "Ca nấu lẩu, nấu mì mini",
    urlImage: require("../assets/anh1.png"),
    nameShop: "DeVang",
  },
  {
    id: 2,
    name: "1 kg khô gà bở tỏi",
    urlImage: require("../assets/anh2.png"),
    nameShop: "LTD Food",
  },
  {
    id: 3,
    name: "Xe cần cẩu đa năng",
    urlImage: require("../assets/anh3.png"),
    nameShop: "Thế giới đồ chơi",
  },
  {
    id: 4,
    name: "Đồ chơi dạng mô hình",
    urlImage: require("../assets/anh4.png"),
    nameShop: "Thế giới đồ chơi",
  },
  {
    id: 5,
    name: "Lãnh đạo giản đơn",
    urlImage: require("../assets/anh5.png"),
    nameShop: "Minh Long Book",
  },
  {
    id: 6,
    name: "Hiểu lòng con trẻ",
    urlImage: require("../assets/anh6.png"),
    nameShop: "Minh Long Book",
  },
  {
    id: 7,
    name: "Hiểu lòng con trẻ",
    urlImage: require("../assets/anh6.png"),
    nameShop: "Minh Long Book",
  },
  {
    id: 8,
    name: "Hiểu lòng con trẻ",
    urlImage: require("../assets/anh6.png"),
    nameShop: "Minh Long Book",
  },
  {
    id: 9,
    name: "Hiểu lòng con trẻ",
    urlImage: require("../assets/anh6.png"),
    nameShop: "Minh Long Book",
  },
  {
    id: 10,
    name: "Hiểu lòng con trẻ",
    urlImage: require("../assets/anh6.png"),
    nameShop: "Minh Long Book",
  },
  {
    id: 11,
    name: "Hiểu lòng con trẻ",
    urlImage: require("../assets/anh6.png"),
    nameShop: "Minh Long Book",
  },
  {
    id: 12,
    name: "Hiểu lòng con trẻ",
    urlImage: require("../assets/anh6.png"),
    nameShop: "Minh Long Book",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
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

export default function Screen4a() {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#fff" : "#c4c4c4";
    const color = item.id === selectedId ? "#E83030" : "#7D5B5B";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ width: 18, height: 16 }}
          source={require("../assets/return.png")}
        />
        <Text style={{ fontSize: 18, fontWeight: "700", color: "white" }}>
          Chat
        </Text>
        <Image
          style={{ width: 23, height: 23 }}
          source={require("../assets/giohang.png")}
        />
      </View>
      <View style={styles.textHeader}>
        <Text>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại Chat với Shop
        </Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </ScrollView>
      <View style={styles.footer}>
        <Image
          style={{ width: 23, height: 14 }}
          source={require("../assets/menu.png")}
        />
        <Image
          style={{ width: 24, height: 24 }}
          source={require("../assets/home.png")}
        />
        <Image
          style={{ width: 26, height: 25 }}
          source={require("../assets/back.png")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#1BA9FF",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    flex: 1,
    alignItems: "center",
  },
  textHeader: {
    paddingHorizontal: 31,
    paddingVertical: 17,
  },
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
  footer: {
    flexDirection: "row",
    paddingHorizontal: 22,
    paddingVertical: 18,
    backgroundColor: "#1BA9FF",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
