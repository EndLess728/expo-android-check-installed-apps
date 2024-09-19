import { StyleSheet, Text, View } from "react-native";

import { checkInstalledApps, hello } from "expo-android-check-installed-apps";
import { useEffect } from "react";

export default function App() {
  const packageNames = [
    "com.google.android.apps.fitness",
    "com.focusbear",
    "com.android.chrome",
  ];
  useEffect(() => {
    const checkInstalled = async () => {
      const checkApp = await checkInstalledApps(packageNames);

      console.log(
        "🚀 ~ file: App.tsx:11 ~ checkInstalled ~ checkApp ===> ",
        checkApp
      );
    };
    checkInstalled();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
