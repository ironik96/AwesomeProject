import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import Home from "./components/Home";

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Home />
      </View>
    </NativeBaseProvider>
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
