import React, { useState } from "react";
import { View, Text, Image, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import InputWithIcon from "../components/InputWithIcon";
import PrimaryButton from "../components/PrimaryButton";

export default function Signup() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [phone, setPhone] = useState("");

  function handleSignUp() {
    if (!username || !password || !confirm) {
      Alert.alert("Error", "Isi semua field yang wajib ya~");
      return;
    }
    if (password !== confirm) {
      Alert.alert("Error", "Password dan konfirmasi tidak sama.");
      return;
    }
    // contoh makin lengkap: panggil API register
    router.push("./login");
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.logoWrap}>
          <Image source={require("../../assets/images/graduation-1.png")} style={styles.logo} />
        </View>

        <InputWithIcon icon="user" placeholder="Username" value={username} onChangeText={setUsername} />
        <InputWithIcon icon="lock" placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
        <InputWithIcon icon="lock" placeholder="Ulangi Password" secureTextEntry value={confirm} onChangeText={setConfirm} />
        <InputWithIcon icon="smartphone" placeholder="No Hp" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />

        <PrimaryButton title="Sign Up" onPress={handleSignUp} disabled={!username || !password || !confirm} />

        <TouchableOpacity style={styles.linkWrap} onPress={() => router.push("./login")}>
          <Text style={styles.linkText}>Sudah punya akun? <Text style={styles.linkAccent}>Login</Text></Text>
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
    paddingTop: 40,
    paddingBottom: 40,
  },
  logoWrap: {
    width: 110,
    height: 110,
    borderRadius: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
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
