// ChatGPT did the CSS for most of this

import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

import SignUpScreen from "@/components/SignUp";
import { ThemedText } from "@/components/ThemedText";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", // Center the components horizontally
    padding: 16,
  },
  input: {
    width: 300, // Fixed width for inputs
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 5,
  },
  buttonContainer: {
    width: 300, // Fixed width for button container
    marginTop: 12,
  },
  signInContainer: {
    flexDirection: "row", // Align text and button in the same row
    marginTop: 20,
  },
  signInText: {
    color: "blue", // Text color for the link
    textDecorationLine: "underline", // Underline the text to make it look like a link
  },
});

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15,
      }}
    >
      <SignUpScreen></SignUpScreen>
      <View style={styles.signInContainer}>
        <Text>Already have an account? </Text>
        <Link href="/SignIn">
          <Text style={styles.signInText}>Sign in</Text>
        </Link>
      </View>
    </View>
  );
}
