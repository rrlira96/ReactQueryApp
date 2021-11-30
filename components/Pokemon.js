import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Pokemon = ({ pokemon, navigation }) => (
  <View style={styles.view}>
    <Text style={styles.text}>{pokemon.name.toUpperCase()}</Text>
    <Button
      onPress={() =>
        navigation.navigate("Details", {
          url: pokemon.url,
        })
      }
      title="details"
      color="blue"
    />
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    color: "red",
  },
  view: {
    height: 70,
    width: 250,
    borderWidth: 1,
    borderColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Pokemon;
