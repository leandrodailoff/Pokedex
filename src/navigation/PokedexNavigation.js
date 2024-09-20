import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokedexScreen from "../screens/Pokedex";
import PokemonDetail from "../screens/PokemonDetail";

const Stack = createNativeStackNavigator();

const PokedexNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokedexScreen"
        component={PokedexScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PokemonDetail"
        component={PokemonDetail}
        options={{
          title: "",
          headerTransparent: true,
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default PokedexNavigator;
