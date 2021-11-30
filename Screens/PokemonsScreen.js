import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import { useQuery } from "react-query";
import Pokemon from "../components/Pokemon";

const PokemonsScreen = ({ navigation }) => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://pokeapi.co/api/v2/pokemon/").then((res) => res.json())
  );

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading data...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error fetching data</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data.results}
        renderItem={({ item }) => (
          <Pokemon pokemon={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.name}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    paddingVertical: 100,
    justifyContent: "center",
  },
});

export default PokemonsScreen;
