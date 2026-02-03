// components/TaskCard.js
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function TaskCard({ title, desc, date, time, tag, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.topRow}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date} {time}</Text>
      </View>
      <Text style={styles.desc}>{desc}</Text>
      <View style={styles.tag}>
        <Text style={{ color: "#fff" }}>{tag}</Text>
      </View>
    </TouchableOpacity>
  );
}
 
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: { fontSize: 16, fontWeight: "bold" },
  date: { fontSize: 12, color: "gray" },
  desc: { marginTop: 8, fontSize: 14, color: "#333" },
  tag: {
    marginTop: 8,
    backgroundColor: "#4C9AFF",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
});
