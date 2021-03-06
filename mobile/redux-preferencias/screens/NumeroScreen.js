import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { useSelector } from "react-redux";

export default NumeroScreen = props => {
  const numero = useSelector(state => state.preferencias.numero);

  return (
    <View style={styles.principal}>
      <Text>Número com fontSize correspondente</Text>
      <Button
        title="Vá para A"
        onPress={() => props.navigation.navigate({ routeName: "Principal" })}
      />
      <Text style={{ ...styles.numero, fontSize: parseInt(numero) }}>
        {numero}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  numero: {
    fontWeight: "bold",
    fontSize: 20
  }
});
