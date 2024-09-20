import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Platform,
} from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons, loadPokemons, isNext, isLoading } = props;

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      onEndReached={isNext && !isLoading ? loadPokemons : null}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        isNext && isLoading ? (
          <ActivityIndicator size="large" style={styles.spinner} />
        ) : null
      }
    />
  );
}

const styles = StyleSheet.create({
  spinner: {
    color: "#fff45",
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  },
});
