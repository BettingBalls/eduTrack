import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { useState } from "react";
import HapusModal from "../modals/hapusModal";
import SelesaiModal from "../modals/selesaiModal";
// import { useRef } from "react";

export default function TaskItem({ title, time, desc, tag, active, data }) {
  const [showSelesaiModal, setShowSelesaiModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // pass data disini
  const onEdit = () => {
    // swipeableRef.current?.close();
    console.log('Edit clicked')
    router.push({
      pathname: "/add/add",
      params: { 
        mode: "edit",
        data: JSON.stringify(data)
      },
    })
  }

  const onDelete = () => {
    setShowDeleteModal(true);
  }

  const onComplete = () => {
    setShowSelesaiModal(true);
  }

  const renderLeftActions = () => {
    return (
      <View style={styles.actions}>
        <TouchableOpacity style={styles.iconBtn} onPress={onEdit} activeOpacity={0.7}>
          <Ionicons name="create-outline" size={16} color="#4C9AFF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBtn} onPress={onDelete} activeOpacity={0.7}>
          <Ionicons name="trash-outline" size={16} color="#FF5A5A" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBtn} onPress={onComplete} activeOpacity={0.7}>
          <Ionicons name="checkmark-outline" size={16} color="#2ECC71" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.row}>
      {/* timeline */}
      <View style={styles.timeline}>
        <View style={[styles.dot, active && styles.activeDot]} />
        <View style={styles.line} />
      </View>

      <Swipeable 
        renderLeftActions={renderLeftActions} 
        overshootLeft={false}
        >
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.time}>{time}</Text>
          </View>

          <Text style={styles.desc}>{desc}</Text>

          <View style={styles.footer}>
            {active && <Text style={styles.progress}>Progress</Text>}
            <View style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          </View>
        </View>
      </Swipeable>
      <HapusModal
        visible={showDeleteModal}
        onCancel={() => setShowDeleteModal(false)}
        onConfirm={() => {
          console.log("Terhapus");
          setShowDeleteModal(false);
        }}
    />
    <SelesaiModal
        visible={showSelesaiModal}
        onCancel={() => setShowSelesaiModal(false)}
        onConfirm={() => {
          console.log("Terselesaikan");
          setShowSelesaiModal(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginBottom: 20,
  },
  timeline: {
    width: 20,
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#FF8A65",
    backgroundColor: "#fff",
  },
  activeDot: {
    backgroundColor: "#FF8A65",
  },
  line: {
    flex: 1,
    width: 1,
    backgroundColor: "#FF8A65",
    marginTop: 4,
  },
  card: {
    flex: 1,
    backgroundColor: "#D3D3D3",
    borderRadius: 16,
    padding: 14,
    elevation: 3,
    minWidth: 300,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
  },
  time: {
    fontSize: 12,
    color: "#4C9AFF",
    fontWeight: "600",
  },
  desc: {
    marginTop: 6,
    fontSize: 12,
    color: "#555",
  },
  footer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progress: {
    fontSize: 10,
    color: "#FF7043",
    fontWeight: "600",
  },
  tag: {
    backgroundColor: "#4C9AFF",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 10,
    color: "#fff",
    fontWeight: "700",
  },
  actions: {
    width: 56,
    backgroundColor: "#fff",
    borderRadius: 16,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginRight: 6,
    elevation: 2,
  },

  iconBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
});
