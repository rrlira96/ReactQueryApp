import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useQuery } from "react-query";
import Pokemon from "./components/Pokemon";

const Home = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://pokeapi.co/api/v2/pokemon/1").then((res) => res.json())
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
      <Pokemon pokemon={data} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
