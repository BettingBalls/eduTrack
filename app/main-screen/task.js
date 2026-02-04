import { View, ScrollView, StyleSheet, Text } from "react-native";
import Header from "../components/header";
import TaskItem from "../components/taskItem";

export default function TaskScreen() {
  const data = {
    title:"Belajar Matematika",
    date:"Kamis 14 Agustus",
    time:"09:00 - 10:00",
    desc:"Belajar soal matematika fungsi kuadrat - logaritma",
    tag:"MTK" 
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.contentWrapper}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.daySelector}>
        {[
          { day: "Sen", date: "11" },
          { day: "Sel", date: "12" },
          { day: "Rab", date: "13" },
          { day: "Kam", date: "14", active: true },
          { day: "Jum", date: "15" },
          { day: "Sab", date: "16" },
          { day: "Min", date: "17" },
        ].map((item, index) => (
          <View
            key={index}
            style={[styles.dayItem, item.active && styles.dayActive]}
          >
            <Text style={[styles.dayText, item.active && styles.dayTextActive]}>
              {item.day}
            </Text>
            <Text style={[styles.dateText, item.active && styles.dayTextActive]}>
              {item.date}
            </Text>
          </View>
        ))}
      </View>

          <TaskItem
            title="Belajar Matematika"
            time="06:00 - 07:00"
            desc="Belajar soal matematika fungsi kuadrat - logaritma"
            tag="MTK"
            active
            data={data}
          />

          <TaskItem
            title="Belajar React Native"
            time="08:00 - 10:00"
            desc="Belajar basic react native dan cara kerja react native"
            tag="PROG"
            data={data}
          />

          <TaskItem
            title="Belajar Matematika"
            time="12:00 - 14:00"
            desc="Belajar soal matematika debit air dan lain-lain"
            tag="MTK"
            data={data}
          />

          <TaskItem
            title="Belajar Mandarin"
            time="17:00 - 19:00"
            desc="Basic mandarin"
            tag="BHS"
            data={data}
          />
          <TaskItem
          title="Main bareng Ruby"
          time="01:00 - 24:00"
          desc="Main bareng Ruby di rumah"
          tag="Lainnya"
            data={data}
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    marginBottom: 16,
  },
  daySelector: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 20,
},

  dayItem: {
  alignItems: "center",
  paddingVertical: 6,
  paddingHorizontal: 8,
  borderRadius: 12,
  },

  dayActive: {
  backgroundColor: "#EAF2FF",
  },

  dayText: {
  fontSize: 12,
  color: "#777",
  fontWeight: "600",
  },

  dateText: {
  fontSize: 12,
  color: "#999",
  },

  dayTextActive: {
  color: "#4C9AFF",
  fontWeight: "700",
  },

});
