//react
import * as React from "react";
import { View, Text, Alert, StyleSheet } from "react-native";

function MyDiaryIndex() {
  return (
    <View style={styles.container}>
      <Text>MyDiaryIndex</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyDiaryIndex;
