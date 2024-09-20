import { SafeAreaView, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonsApi, getPokemonsDetailsByUrlApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
  const [pokemons, setPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadPokemons();
  }, []);

  const loadPokemons = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);
      const pokemonsArray = [];
      for (const pokemon of response.results) {
        const pokemonsDetails = await getPokemonsDetailsByUrlApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonsDetails.id,
          name: pokemonsDetails.name,
          type: [...pokemonsDetails.types],
          order: pokemonsDetails.order,
          image:
            pokemonsDetails.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemon((prevPokemons) => [...prevPokemons, ...pokemonsArray]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
        isLoading={isLoading}
      />
    </SafeAreaView>
  );
}
