import React, { useState } from "react";
import {
  View, Text, Image, StyleSheet,
  KeyboardAvoidingView, Platform, ScrollView,
  TouchableOpacity
} from "react-native";
import { useRouter } from "expo-router";
import InputWithIcon from "../components/InputWithIcon";
import PrimaryButton from "../components/PrimaryButton";
import { saveUser, API } from "../utils/auth";


export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const res = await fetch(API + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (!res.ok) return alert("Login gagal");

    await saveUser(data.user);
    router.replace("/main-screen/dashboard");
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.logoWrap}>
          <Image
            source={require("../../assets/images/graduation-1.png")}
            style={styles.logo}
          />
        </View>

        <InputWithIcon
          icon="user"
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <InputWithIcon
          icon="lock"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <PrimaryButton title="Login" onPress={handleLogin} />

        <TouchableOpacity
          style={styles.linkWrap}
          onPress={() => router.push("./signup")}
        >
          <Text style={styles.linkText}>Tidak punya akun?{" "}<Text style={styles.linkAccent}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#4A97E6",
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 40,
  },
  logoWrap: {
    width: 110,
    height: 110,
    borderRadius: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
  },
  logo: {
    width: 72,
    height: 72,
    resizeMode: "contain",
  },
  linkWrap: {
    marginTop: 10,
  },
  linkText: {
    color: "#ecf6ff",
    fontSize: 13,
  },
  linkAccent: {
    color: "#ffd36a",
    fontWeight: "600",
  },
});
