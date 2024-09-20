import { View, SafeAreaView, StyleSheet, Image, Text } from "react-native";
import React from "react";
import { capitalize } from "lodash";
import getColorByType from "../../utils/getColorByType";

export default function Header(props) {
  const { name, order, image, type } = props;

  const pokemonColor = getColorByType(type);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

  return (
    <>
      <View style={bgStyles} />

      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bgStyles: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 150,
    borderBottomLeftRadius: 150,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 65,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27,
  },
  order: {
    color: "#fff",
    fontWeight: "bold",
  },
  content: {
    marginHorizontal: 20,
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});
