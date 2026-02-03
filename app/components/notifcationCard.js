import { View, Text, StyleSheet } from "react-native";

export default function NotificationCard({
  title,
  desc,
  danger = false,
}) {
  return (
    <View style={[styles.card, danger && styles.dangerCard]}>
      <View style={[styles.dot, danger && styles.dotDanger]} />

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
    elevation: 2,
  },

  dangerCard: {
    borderLeftWidth: 3,
    borderLeftColor: "#FF6B6B",
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#4C9AFF",
    marginTop: 6,
    marginRight: 10,
  },

  dotDanger: {
    backgroundColor: "#FF6B6B",
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
    marginBottom: 2,
  },

  desc: {
    fontSize: 11,
    color: "#777",
  },
});
