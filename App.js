import React from "react";
import { StyleSheet } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import PokemonsScreen from "./Screens/PokemonsScreen";
import PokemonDetail from "./Screens/PokemonDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Pokemons" component={PokemonsScreen} />
          <Stack.Screen name="Details" component={PokemonDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
