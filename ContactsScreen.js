import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

function Contact({ name, phone, image }) {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={{ image }} />
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.phoneText}>{phone}</Text>
      </View>
      <View style={styles.icon}>
        <MaterialIcons name="local-phone" size={25} color="#009cf5" />
      </View>
      <View style={styles.icon}>
        <MaterialCommunityIcons
          name="message-processing"
          size={25}
          color="#009cf5"
        />
      </View>
      <View style={styles.icon}>
        <SimpleLineIcons name="options-vertical" size={25} color="#a8a8a8" />
      </View>
    </View>
  );
}

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    backgroundColor: "#eee",
    padding: 8,
    marginTop: 60,
  },

  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  textContainer: {
    marginLeft: 16,
    marginRight: 25,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  phoneText: {
    fontSize: 16,
    color: "#999",
  },
  icon: {
    flex: 0.5,
    alignItems: "flex-end",
  },
});