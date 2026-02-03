import { View, Text, Modal, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function EditModal({ visible, type, onClose }) {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");

  const getTitle = () => {
    if (type === "username") return "Username baru";
    if (type === "password") return "Password baru";
    if (type === "phone") return "No HP baru";
    return "";
  };

  const handleSubmit = () => {
    if(!password ) {
      alert("Masukkan password untuk konfirmasi");
      return;
    }
      onClose();
      setValue("");
      setPassword("");
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.title}>{getTitle()}</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={18} color="#333" />
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.input}
            placeholder={getTitle()}
            secureTextEntry={type === "password"}
            value={value}
            onChangeText={setValue}
          />

          <TextInput
            style={styles.input}
            placeholder="Masukkan password Anda"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
            <Text style={{ color: "#fff", fontWeight: "600" }}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: { fontSize: 14, fontWeight: "600" },
  input: {
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
  },
  btn: {
    backgroundColor: "#2ECC71",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
  },
});
