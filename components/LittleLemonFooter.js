import { StyleSheet, Text, View } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>
        All rights reserved by Little Lemon, 2023{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: "#EE9972",
  },
  footerText: {
    fontSize: 18,
    color: "#000",
    textAlign: "center",
    fontStyle: "italic",
  },
});
