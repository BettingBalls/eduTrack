import { View, StyleSheet, Text } from "react-native";
import Header from "../components/header";

export default function ProgressScreen() {
  const data = [
    { month: "Jun", value: 120 },
    { month: "Jul", value: 60 },
    { month: "Agu", value: 180 },
    { month: "Sep", value: 40 },
    { month: "Okt", value: 20 },
    { month: "Nov", value: 90 },
  ];

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.contentWrapper}>
        <View style={styles.card}>
          <Text style={styles.total}>Total Tugas : 90</Text>

          <View style={styles.chartContainer}>
            <View style={styles.yAxis}>
              {[50, 40, 30, 20, 10, 0].map((v) => (
                <Text key={v} style={styles.yText}>{v}</Text>
              ))}
            </View>

            <View style={styles.barArea}>
              {data.map((item, index) => (
                <View key={index} style={styles.column}>
                  <View style={[styles.bar, { height: item.value }]} />
                  <Text style={styles.monthText}>{item.month}</Text>
                </View>
              ))}
            </View>
          </View>

          <Text style={styles.overviewTitle}>Overview</Text>

          <View style={styles.overviewCardSingle}>
            <Text style={styles.overviewLine}>
              • Total tugas bulan ini : 44
            </Text>
            <Text style={styles.overviewLine}>
              • Mapel favorit bulan ini : Matematika
            </Text>
            <Text style={styles.overviewLine}>
              • Tugas selesai : 31
            </Text>
            <Text style={styles.overviewLine}>
              • Terlambat : 9
            </Text>
          </View>
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

  contentWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -4,
    padding: 16,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 16,
    paddingRight: 16,
    elevation: 3,
  },

  total: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 12,
    paddingLeft: 16,
  },

  chartContainer: {
    flexDirection: "row",
    height: 220,
  },

  yAxis: {
    width: 28,
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: 22, // sejajar dengan bulan
  },

  yText: {
    fontSize: 10,
    color: "#888",
  },

  barArea: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },

  column: {
    alignItems: "center",
  },

  bar: {
    width: 22,
    borderRadius: 12,
    backgroundColor: "#1E2E8C",
    marginBottom: 6,
  },

  monthText: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },

  overviewTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 8,
    paddingLeft: 16,
  },

  overviewText: {
    fontSize: 12,
    color: "#555",
    marginBottom: 4,
    paddingLeft: 16,
  },
  overviewCardSingle: {
  backgroundColor: "#F4F7FF",
  borderRadius: 14,
  padding: 12,
  marginHorizontal: 16,
  },

  overviewLine: {
    fontSize: 12,
    color: "#555",
    marginBottom: 6,
  },
});
