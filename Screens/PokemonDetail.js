import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import { useQuery } from "react-query";

const PokemonDetail = ({ navigation, route }) => {
  const { url } = route.params;
  const { isLoading, error, data } = useQuery("pokeDetails", () =>
    fetch(url).then((res) => res.json())
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
      <Text style={styles.pokeName}>{data.name}</Text>
      <Image
        style={{ width: 400, height: 400 }}
        source={{
          uri: data.sprites.front_default,
        }}
      />
      <Text style={styles.pokeDetails}>Height → {data.height}</Text>
      <Text style={styles.pokeDetails}>Weight → {data.weight}</Text>
      <Text style={styles.pokeDetails}>Order → {data.order}</Text>
      <Text style={styles.pokeDetails}>
        Base experience → {data.base_experience}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    backgroundColor: "yellow",
  },
  pokeName: {
    fontSize: 30,
    fontWeight: "bold",
  },
  pokeDetails: {
    fontSize: 20,
    paddingTop: 15,
  },
});

export default PokemonDetail;
