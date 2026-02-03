import { View, Text, StyleSheet } from "react-native";

export default function ProgressChart() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Progress Chart</Text>

      <View style={styles.row}>
        <ProgressItem value="0/4" label="Hari ini" />
        <ProgressItem value="15/30" label="Minggu ini" active />
        <ProgressItem value="30/90" label="Bulan ini" />
      </View>
    </View>
  );
}

function ProgressItem({ value, label, active }) {
  return (
    <View style={styles.item}>
      <View
        style={[
          styles.circle,
          active && styles.circleActive,
        ]}
      >
        <Text
          style={[
            styles.value,
            active && styles.valueActive,
          ]}
        >
          {value}
        </Text>
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
    elevation: 3,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 12,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  item: {
    alignItems: "center",
    flex: 1,
  },

  circle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 6,
    borderColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },

  circleActive: {
    borderColor: "#4C9AFF",
  },

  value: {
    fontSize: 14,
    color: "#9CA3AF",
    fontWeight: "600",
  },

  valueActive: {
    color: "#4C9AFF",
  },

  label: {
    fontSize: 12,
    color: "#6B7280",
  },
});
