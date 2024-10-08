import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Keyboard,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetails } from "../../utils/userDB";
import useAuth from "../../hooks/useAuth";

export default function LoginForm() {
  const [error, setError] = useState("");
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      setError("");
      const { username, password } = formValue;

      if (username !== user.username || password !== user.password) {
        setError("El usuario o la contraseña no son correcto");
      } else {
        login(userDetails);
      }
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>Iniciar sesión</Text>
      </View>
      <View style={styles.bottomSection}>
        <TextInput
          placeholder="Nombre de usuario"
          style={styles.input}
          autoCapitalize="none"
          value={formik.values.username}
          onChangeText={(text) => formik.setFieldValue("username", text)}
        />
        <TextInput
          placeholder="Contraseña"
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
          value={formik.values.password}
          onChangeText={(text) => formik.setFieldValue("password", text)}
        />
        <TouchableOpacity style={styles.button} onPress={formik.handleSubmit}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.error}>{formik.errors.username}</Text>
        <Text style={styles.error}>{formik.errors.password}</Text>

        <Text style={styles.error}>{error}</Text>
      </View>
    </View>
  );
}

function initialValues() {
  return {
    username: "",
    password: "",
  };
}

function validationSchema() {
  return {
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D32F2F",
  },
  topSection: {
    flex: 1, // Parte superior más pequeña
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D32F2F", // Rojo Pokéball
  },
  title: {
    fontFamily: "RobotoMono-Italic",
    textAlign: "center",
    fontSize: 28,
    marginTop: 50,
    marginBottom: 15,
    color: "#ffffff",
  },
  bottomSection: {
    flex: 2,
    backgroundColor: "#ffffff",
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 30,
    borderColor: "#000000",
  },
  input: {
    fontFamily: "RobotoMono-Italic",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 2,
    backgroundColor: "#D32F2F",
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  buttonText: {
    fontFamily: "RobotoMono-Italic",
    textAlign: "center",
    color: "#ffffff",
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
});
