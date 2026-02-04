import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/header";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export default function AddTaskScreen() {
  const { mode, data } = useLocalSearchParams();
  const isEdit = mode === "edit";

  const taskData = data ? JSON.parse(data) : null;
  const timeRange = taskData?.time?.split(" - ") || ["", ""];

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (isEdit && taskData) {
      setTitle(taskData.title);
      setDesc(taskData.desc);
      setDate(taskData.date);
      setStart(timeRange[0]);
      setEnd(timeRange[1]);
      setCategory(taskData.tag);
    }
  }, []);

  const onSubmit = () => {
    if (isEdit) {
      console.log("UPDATE TASK", { title, desc, date, start, end, category });
    } else {
      console.log("ADD TASK", { title, desc, date, start, end, category });
    }
    router.back();
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <View style={styles.card}>

          <View style={styles.titleRow}>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={20} color="#333" />
            </TouchableOpacity>
            <Text style={styles.title}>
              {isEdit ? "Edit Tugas" : "Tambah Tugas"}
            </Text>
          </View>

          <Text style={styles.label}>Judul Tugas</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="Ex: Belajar Matematika"
          />

          <Text style={styles.label}>Deskripsi Tugas</Text>
          <TextInput
            style={styles.input}
            value={desc}
            onChangeText={setDesc}
            placeholder="Ex: Belajar tentang fungsi"
          />

          <Text style={styles.label}>Deadline Tanggal</Text>
          <TextInput
            style={styles.input}
            value={date}
            onChangeText={setDate}
            placeholder="Jum 20, Agustus, 2025"
          />

          <Text style={styles.label}>Deadline Jam</Text>
          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.time]}
              value={start}
              onChangeText={setStart}
              placeholder="08:00"
            />
            <TextInput
              style={[styles.input, styles.time]}
              value={end}
              onChangeText={setEnd}
              placeholder="10:00"
            />
          </View>

          <Text style={styles.label}>Kategori</Text>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.dropdownText}>
                {category || "Pilih kategori"}
              </Text>
              <Ionicons name="chevron-down" size={18} color="#666" />
            </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={onSubmit}>
            <Text style={styles.buttonText}>
              {isEdit ? "Simpan Perubahan" : "Tambah"}
            </Text>
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
