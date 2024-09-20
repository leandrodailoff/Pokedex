import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FavoriteScreen from "../screens/Favorite";

/* No se utiliza por version actualizada de navigation 6.x, no necesita otro stack*/
const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
    </Stack.Navigator>
  );
}
