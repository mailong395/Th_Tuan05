import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import dataPhone from "./dataPhone";
import OneItem from "./item";

const DATA = dataPhone;

export default function Screen4a() {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#fff" : "#c4c4c4";
    const color = item.id === selectedId ? "#E83030" : "#7D5B5B";
    return (
      <OneItem
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textHeader}>
        <Text>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại Chat với Shop
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
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
