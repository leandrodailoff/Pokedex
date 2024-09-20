import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonsDetailsApi } from "../api/pokemon";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";

export default function PokemonDetail(props) {
  const {
    navigation,
    route: { params },
  } = props;

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
    });
  }, [navigation, params]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonsDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
    </ScrollView>
  );
}
