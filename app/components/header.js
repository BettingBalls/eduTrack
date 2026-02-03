import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Header({ name }) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>EduTrack</Text>
      <TouchableOpacity onPress={() => router.push("/profile-screen/profile")}>
      <Image
        source={require ("../../assets/images/profile-icon.png")}
        style={styles.avatar}
      />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#4C9AFF",
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
