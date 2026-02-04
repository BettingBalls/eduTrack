import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";

export default function DeleteConfirmModal({ visible, onCancel, onConfirm }) {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>

          <Text style={styles.title}>Hapus Tugas?</Text>

          <Text style={styles.desc}>
            Apakah Anda yakin ingin menghapus tugas ini?
          </Text>

          <View style={styles.actions}>
            <TouchableOpacity
              style={[styles.button, styles.cancel]}
              onPress={onCancel}
              activeOpacity={0.8}
            >
              <Text style={styles.cancelText}>Tidak</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.delete]}
              onPress={onConfirm}
              activeOpacity={0.8}
            >
              <Text style={styles.deleteText}>Hapus</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "78%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 22,
    alignItems: "center",
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 8,
    color: "#222",
  },
  desc: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    marginBottom: 22,
    lineHeight: 18,
  },
  actions: {
    flexDirection: "row",
    width: "100%",
    gap: 12,
  },
  button: {
    flex: 1,                // ⬅️ INI kuncinya (ukuran sama)
    paddingVertical: 13,
    borderRadius: 24,
    alignItems: "center",
  },
  cancel: {
    backgroundColor: "#F2F2F2",
  },
  delete: {
    backgroundColor: "#FF5A5A",
  },
  cancelText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  deleteText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
});