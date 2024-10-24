import { Text, View, StyleSheet, Alert } from "react-native";
import { auth } from "@/firebase-config";
import { ThemedText } from "@/components/ThemedText";
import { Link, router } from "expo-router";

const Home = () => {
  var email = auth.currentUser?.email;
  if (email == null) {
    console.log("Error!! Email is null");
    router.replace("/index");
    Alert.alert("Error", "Email is undefined.");
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15,
      }}
    >
      <Text>Hello, {email}</Text>
      <View
        style={{
          flexDirection: "row", // Align text and button in the same row
          marginTop: 20,
        }}
      >
        <Text>Go to the next page: </Text>
        <Link href="/NextPage">
          <Text
            style={{
              color: "blue",
              textDecorationLine: "underline",
            }}
          >
            Tap here
          </Text>
        </Link>
      </View>
    </View>
  );
};

export default Home;
