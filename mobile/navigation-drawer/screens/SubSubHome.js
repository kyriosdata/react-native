import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default SubSubHome = props => {
  return (
    <View style={styles.tela}>
      <Text style={styles.identificacao}>SUBSUB home (terceira)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  identificacao: {
    fontSize: 25,
    fontWeight: "bold"
  }
});
