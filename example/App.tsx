import { StyleSheet, Text, View } from 'react-native';

import * as ExpoCheckInstalledApps from 'expo-check-installed-apps';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoCheckInstalledApps.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
