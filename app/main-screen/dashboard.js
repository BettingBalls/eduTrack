import { View, ScrollView, StyleSheet, Text } from "react-native";
import Header from "../components/header";
import TaskCard from "../components/taskCard";
import ProgressChart from "../components/progressChart";
import { useEffect, useState } from "react";
import { getUser } from "../utils/auth";

export default function Dashboard() {
  const [username, setUsername] = useState("");
  
  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      if (user) {
        setUsername(user.username);
      }
    };
    loadUser();
  })
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.contentWrapper}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.greeting}>Selamat Datang{username ? `, ${username}` : ""}!</Text>

          <Text style={styles.sectionTitle}>Tugas Terdekat</Text>

          <TaskCard
            title="Belajar Matematika"
            date="Kamis 14 Agustus"
            time="09:00 - 10:00"
            desc="Belajar soal matematika fungsi kuadrat - logaritma"
            tag="MTK"
          />

          <TaskCard
            title="Belajar React Native"
            date="Kamis 14 Agustus"
            time="13:00 - 15:00"
            desc="Belajar basic react native dan cara kerja react native"
            tag="PROG"
          />
          <ProgressChart />
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
    overflow: "hidden",
  },

  content: {
    padding: 16,
    paddingBottom: 24,
  },

  greeting: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
    marginBottom: 12,
  },
});
