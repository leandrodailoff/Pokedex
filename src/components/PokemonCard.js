import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { capitalize } from "lodash";
import { useNavigation } from "@react-navigation/native";
import getColorByType from "../utils/getColorByType";

export default function PokemonCard(props) {
  const { pokemon } = props;
  const navigation = useNavigation();
  const pokemonColor = getColorByType(pokemon.type[0].type.name);

  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };
  const goToPokemon = () => {
    navigation.navigate("PokemonDetail", { id: pokemon.id });
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.order}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 25,
    padding: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 20,
    width: 90,
    height: 90,
  },
  order: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 10,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 0,
  },
});
