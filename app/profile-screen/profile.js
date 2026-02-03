// app/screens/profile.js
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/header";
import { router } from "expo-router";
import { useState } from "react";
import EditModal from "../modals/editProfileModal";

export default function Profile() {
  const [modalVisible, setModalVisible] = useState(false);
  const [editType, setEditType] = useState(null);

  const openModal = (type) => {
    setEditType(type);
    setModalVisible(true);
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.pageTitle}>Profile Page</Text>
        </View>

        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Image
            source={require ("../../assets/images/Kasane Teto - 2.jpg")}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.uploadBtn}>
            <Text style={{ color: "#fff", fontWeight: "600" }}>Upload</Text>
          </TouchableOpacity>
        </View>

      <View style={styles.inputGroup}>
        <TextInput style={styles.input} placeholder="Username" value="Daz" />
        <TouchableOpacity onPress={() => openModal("username")}>
          <Ionicons name="create-outline" size={18} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value="********"
        />
        <TouchableOpacity onPress={() => openModal("password")}>
          <Ionicons name="create-outline" size={18} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.inputGroup}>
        <TextInput style={styles.input} placeholder="No HP" value="081234567890" />
        <TouchableOpacity onPress={() => openModal("phone")}>
          <Ionicons name="create-outline" size={18} style={styles.icon} />
        </TouchableOpacity>
      </View>

        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => router.push("../screens/login")}
        >
          <Text style={{ color: "#fff", fontWeight: "600" }}>Logout</Text>
        </TouchableOpacity>
      </View>
      <EditModal
        visible={modalVisible}
        type={editType}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#4C9AFF" },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  pageTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
    color: "#333",
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "#eee",
    marginBottom: 10,
  },
  uploadBtn: {
    backgroundColor: "#4C9AFF",
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 14,
    color: "#333",
  },
  icon: { marginLeft: 8, color: "#999" },
  logoutBtn: {
    backgroundColor: "red",
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 20,
  },
});
