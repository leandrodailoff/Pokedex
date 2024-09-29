import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import { AuthProvider } from "./src/context/AuthContext";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Evitar que la pantalla de carga se oculte hasta que se carguen las fuentes
SplashScreen.preventAutoHideAsync();

const loadFonts = async () => {
  await Font.loadAsync({
    "RobotoMono-Italic": require("./assets/fonts/RobotoMono-Italic.ttf"),
  });
  console.log("fuentes cargadas");
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadResources = async () => {
      try {
        await loadFonts();
      } catch (error) {
        console.warn(error);
      } finally {
        setFontsLoaded(true);
        // Ocultar la pantalla de carga
        await SplashScreen.hideAsync();
      }
    };

    loadResources();
  }, []);

  if (!fontsLoaded) {
    // Puedes devolver un componente de carga mientras las fuentes están cargando
    return null; // O un componente de carga personalizado
  }
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </NavigationContainer>
  );
}
