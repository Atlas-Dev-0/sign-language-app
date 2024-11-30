import React from "react";
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window"); // Get the full screen dimensions

export default function Categories() {
  const nav = useNavigation(); // Get the navigation object

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.container}
        colors={["#ff0070", "#6fb7ff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <ScrollView contentContainerStyle={styles.gridContainer}>
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => nav.navigate("Alphabets" as never)}
          >
            <Image
              source={require("../assets/images/buttons/ALPHABETS_BUTTON.png")}
              style={styles.gridImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => nav.navigate("Greetings And Phrases" as never)}
          >
            <Image
              source={require("../assets/images/buttons/GREETINGS_AND_PHRASES_BUTTON.png")}
              style={styles.gridImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => nav.navigate("Numbers" as never)}
          >
            <Image
              source={require("../assets/images/buttons/NUMBERS_BUTTON.png")}
              style={styles.gridImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => nav.navigate("Days" as never)}
          >
            <Image
              source={require("../assets/images/buttons/DAYS_BUTTON.png")}
              style={styles.gridImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => nav.navigate("Animals" as never)}
          >
            <Image
              source={require("../assets/images/buttons/ANIMALS_BUTTON.png")}
              style={styles.gridImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => nav.navigate("Physical Activities" as never)}
          >
            <Image
              source={require("../assets/images/buttons/PHYSICAL_BUTTON.png")}
              style={styles.gridImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => nav.navigate("Colors" as never)}
          >
            <Image
              source={require("../assets/images/buttons/COLORS_BUTTON.png")}
              style={styles.gridImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => nav.navigate("People" as never)}
          >
            <Image
              source={require("../assets/images/buttons/PEOPLE_BUTTON.png")}
              style={styles.gridImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => nav.navigate("Quiz" as never)}
          >
            <Image
              source={require("../assets/images/buttons/QUIZ_BUTTON.png")}
              style={styles.gridImage}
            />
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  gridItem: {
    borderColor: "white",
    borderWidth: 3,
    width: width * 0.4, // 40% of screen width
    height: width * 0.4, // 40% of screen width for a square
    justifyContent: "center",
    alignItems: "center",
    margin: width * 0.03, // 3% of screen width
    borderRadius: 27,
    overflow: "hidden",
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
      },
    }),
  },
  gridImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
