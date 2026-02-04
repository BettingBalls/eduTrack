import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveUser = async (user) => {
  await AsyncStorage.setItem("user", JSON.stringify(user));
};

export const getUser = async () => {
  const data = await AsyncStorage.getItem("user");
  return data ? JSON.parse(data) : null;
};

export const logout = async () => {
  await AsyncStorage.removeItem("user");
};

export const removeUser = async () => {
  await AsyncStorage.removeItem("user");
};

export const API = "http://192.168.22.234:3000";

