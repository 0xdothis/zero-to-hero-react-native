import TextInput from "@/components/TextIput";
import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

export default function Index() {
  const theme = useColorScheme();
  const isDarkMode = theme === "dark";

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        { backgroundColor: isDarkMode ? "#222" : "#f4f4f4" },
      ])}
    >
      <Text
        style={StyleSheet.flatten([
          styles.header,
          { color: isDarkMode ? "#f4f4f4" : "#222" },
        ])}
      >
        Login Form
      </Text>
      <View
        style={StyleSheet.flatten([
          styles.cardContainer,
          { backgroundColor: isDarkMode ? "#333" : "whitesmoke" },
        ])}
      >
        <View style={styles.cardWrapper}>
          <Text
            style={StyleSheet.flatten([
              styles.label,
              { color: isDarkMode ? "#f4f4f4" : "#222" },
            ])}
          >
            Name
          </Text>
          <TextInput placeholder="Enter your fullname" />
        </View>
        <View style={styles.cardWrapper}>
          <Text
            style={StyleSheet.flatten([
              styles.label,
              { color: isDarkMode ? "#f4f4f4" : "#222" },
            ])}
          >
            Email
          </Text>
          <TextInput placeholder="Enter a valid email" />
        </View>
        <View style={styles.cardWrapper}>
          <Text
            style={StyleSheet.flatten([
              styles.label,
              { color: isDarkMode ? "#f4f4f4" : "#222" },
            ])}
          >
            Password
          </Text>
          <TextInput placeholder="Enter a password" secureTextEntry={true} />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 8,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardContainer: {
    height: "auto",
    width: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    boxShadow: "0 4px 12px #00000020",
    gap: 12,
  },
  cardWrapper: {
    height: "auto",
    width: "auto",
    gap: 4,
  },
  label: {
    fontSize: 12,
  },
  button: {
    borderRadius: 8,
    backgroundColor: "seagreen",
    padding: 12,
    alignItems: "center",
  },
});
