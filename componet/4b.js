import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { dataThietBi } from "./dataThietBi";
import GrirdViewItem from "./GirdViewItem";

const DATA = dataThietBi;

export default function Screen4b() {
  const renderItem = ({ item }) => {
    return <GrirdViewItem item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} numColumns={2} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
});
