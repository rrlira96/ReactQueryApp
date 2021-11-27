import React from "react";
import { View, Text } from "react-native";

const Pokemon = ({ pokemon }) => (
  <View>
    <Text>Name: {pokemon.name}</Text>
    <Text>Height: {pokemon.height}</Text>
    <Text>Weight: {pokemon.weight}</Text>
  </View>
);

export default Pokemon;
