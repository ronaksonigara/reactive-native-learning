import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <ScrollView style={styles.container} indicatorStyle={"white"}>
      <Text style={styles.heading}>Welcome to Little Lemon</Text>
      <Text style={styles.subHeading}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!Little Lemon is a charming
        neighborhood bistro that serves simple food and classic cocktails in a
        lively but casual environment. We would love to hear more about your
        experience with us!Little Lemon is a charming neighborhood bistro that
        serves simple food and classic cocktails in a lively but casual
        environment. We would love to hear more about your experience with
        us!Little Lemon is a charming neighborhood bistro that serves simple
        food and classic cocktails in a lively but casual environment. We would
        love to hear more about your experience with us!Little Lemon is a
        charming neighborhood bistro that serves simple food and classic
        cocktails in a lively but casual environment. We would love to hear more
        about your experience with us!Little Lemon is a charming neighborhood
        bistro that serves simple food and classic cocktails in a lively but
        casual environment. We would love to hear more about your experience
        with us!Little Lemon is a charming neighborhood bistro that serves
        simple food and classic cocktails in a lively but casual environment. We
        would love to hear more about your experience with us!Little Lemon is a
        charming neighborhood bistro that serves simple food and classic
        cocktails in a lively but casual environment. We would love to hear more
        about your experience with us!Little Lemon is a charming neighborhood
        bistro that serves simple food and classic cocktails in a lively but
        casual environment. We would love to hear more about your experience
        with us!Little Lemon is a charming neighborhood bistro that serves
        simple food and classic cocktails in a lively but casual environment. We
        would love to hear more about your experience with us!Little Lemon is a
        charming neighborhood bistro that serves simple food and classic
        cocktails in a lively but casual environment. We would love to hear more
        about your experience with us!Little Lemon is a charming neighborhood
        bistro that serves simple food and classic cocktails in a lively but
        casual environment. We would love to hear more about your experience
        with us!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  subHeading: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
});
