import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import PrimaryButton from "../../../components/PrimaryButton";
import useAuth from "../../../Hooks/useAuth";
import { StatusBar } from "expo-status-bar";
import { width } from "../../../constant/Dimensions";

const LoginScreen = () => {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    await login(email, password);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={{ fontSize: 18, fontWeight: "bold", paddingBottom: 10 }}>
        LogIn
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text: string) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text: string) => setPassword(text)}
      />
      <PrimaryButton title="Login" onPress={handleLogin} loading={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: width * 0.75,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
