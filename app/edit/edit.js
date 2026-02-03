import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/header";
import { router, useLocalSearchParams } from "expo-router";

export default function AddTaskScreen() {
  const { data } = useLocalSearchParams();

  const taskData = data ? JSON.parse(data) : null
  const timeRange = taskData?.time?.split(' - ')
  console.log(taskData)

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.titleRow}>
            <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={20} color="#333" />
            </TouchableOpacity>
            <Text style={styles.title}>Edit Tugas</Text>
          </View>

          <Text style={styles.label}>Judul Tugas</Text>
          <TextInput
            placeholder="Ex: Belajar Matematika"
            style={styles.input}
            value={taskData.title}
          />

          <Text style={styles.label}>Deskripsi Tugas</Text>
          <TextInput
            placeholder="Ex: Belajar tentang fungsi dan logaritma"
            style={styles.input}
            value={taskData.desc}
          />

          <Text style={styles.label}>Deadline Tanggal Tugas</Text>
          <TextInput
            placeholder="Jum 20, Agustus, 2025"
            style={styles.input}
            value={taskData.date}
          />

          <Text style={styles.label}>Deadline Jam Tugas</Text>
          <View style={styles.row}>
            <TextInput 
              placeholder="08:00" style={[styles.input, styles.time]}
              value={timeRange[0]}
             />
            <TextInput 
              placeholder="10:00" style={[styles.input, styles.time]} 
              value={timeRange[1]}
              />
          </View>

          <Text style={styles.label}>Kategori</Text>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>Pilih kategori</Text>
            <Ionicons name="chevron-down" size={18} color="#666" />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4C9AFF",
  },
  content: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    elevation: 3,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "600",
  },
  label: {
    fontSize: 13,
    color: "#666",
    marginTop: 12,
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
  time: {
    flex: 1,
  },
  dropdown: {
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownText: {
    fontSize: 14,
    color: "#888",
  },
  button: {
    backgroundColor: "#2ECC71",
    marginTop: 24,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
