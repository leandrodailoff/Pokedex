import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import FavoriteScreen from "../screens/Favorite";
import PokedexNavigator from "../navigation/PokedexNavigation";
import AccountScreen from "../screens/Account";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: () => <Icon name="heart" size={20} color="#900" />,
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigator}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Cuenta",
          tabBarIcon: () => <Icon name="user" size={20} color="#900" />,
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
}
