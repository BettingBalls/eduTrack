import { useEffect, useState } from "react";
import { View } from "react-native";
import { Redirect } from "expo-router";
import SplashScreen from "./screens/splashscreen";

export default function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1 }}>
        <SplashScreen />
      </View>
    );
  }

  return <Redirect href="/screens/login" />;
}