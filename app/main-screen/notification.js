import { View, ScrollView, StyleSheet, Text } from "react-native";
import Header from "../components/header";
import NotificationCard from "../components/notifcationCard";

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.contentWrapper}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Notifikasi</Text>

          {/* HARI INI */}
          <Text style={styles.section}>Hari ini</Text>

          <NotificationCard
            title="Pengingat Belajar React Native"
            desc="Hari ini 08:00 pagi"
          />

          <NotificationCard
            title="Pengingat Belajar Matematika"
            desc="Hari ini 06:00 pagi"
          />

          {/* KEMARIN */}
          <Text style={styles.section}>Kemarin</Text>

          <NotificationCard
            title="Pengingat Belajar Personal AI"
            desc="Jam 19:00 malam"
          />

          <NotificationCard
            title="Terlambat Belajar Mandarin"
            desc="Deadline 19:00"
            danger
          />
        </ScrollView>
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
  },

  content: {
    padding: 16,
    paddingBottom: 24,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    marginBottom: 12,
  },

  section: {
    fontSize: 12,
    color: "#888",
    marginBottom: 8,
    marginTop: 12,
  },
});
