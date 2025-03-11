import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window'); // Get screen width and height

export default function Quiz() {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.container}
        colors={["#ff0070", "#6fb7ff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Image
          source={require("../assets/images/buttons/quiz_logo.png")}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <ThemedText style={styles.middleText}>Available Games</ThemedText>
          <View style={styles.rectangle}></View>
        </View>
        <View style={styles.itemContainer}>
          <TouchableOpacity
            onPress={() => nav.navigate("True or False")}
            style={styles.itemCard}>
            <Image
              source={require("../assets/images/buttons/TRUE_OR_FALSE.png")}
              style={styles.icon}
            />
            <ThemedText style={styles.text}>TRUE OR FALSE</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => nav.navigate("Flash Cards")}
            style={styles.itemCard}
          >
            <Image
              source={require("../assets/images/buttons/FLASH_CARDS.png")}
              style={styles.icon}
            />
            <ThemedText style={styles.text}>FLASH CARDS</ThemedText>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: "100%",
    width: "100%",
  },
  icon: {
    marginLeft: 8,
    width: width * 0.2,
    height: '80%', // Adjust height proportionally
    resizeMode: 'contain',
  },
  middleText: {
    fontSize: width * 0.05, // Dynamic height (8% of screen height)
    fontWeight: 'bold',
    color: '#fff', // Adjust text color as needed
    marginRight: 10, // Space between text and the rectangle
  },
  rectangle: {
    width: width * 0.4, // Width of the rectangle
    height: 2, // Height of the rectangle
    backgroundColor: '#fff', // Color of the rectangle (white in this case)
  },
  textContainer: {
    flexDirection: 'row', // Align text and rectangle horizontally
    alignItems: 'center', // Vertically center them
  },
  image: {
    marginBottom: 1, // Responsive bottom margin
    borderColor: 'white',
    width: width * 0.9,
    height: height * 0.5, // Adjust height proportionally
    resizeMode: 'contain',
  },
  itemContainer: {
    marginTop: height * 0.02, // Responsive margin
    width: '100%', // Full width of the card
    backgroundColor: 'transparent',
    borderColor: '#ddd',
    borderRadius: 12,
    shadowColor: '#0001',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    paddingVertical: height * 0.01, // Padding based on height
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  itemCard: {
    flexDirection: 'row', // Align text and rectangle horizontally
    borderColor: 'white',
    borderWidth: 4,
    marginVertical: height * 0.01, // Space between cards (responsive)
    width: "90%", // 90% of itemContainer width
    minHeight: height * 0.08, // Dynamic height (8% of screen height)
    backgroundColor: '#FF00BE',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: width * 0.07, // Dynamic font size
    color: 'white',
    alignSelf: 'center',
    alignItems: 'left',
    justifyContent: 'center',
    fontWeight: 'bold',
    textAlign: 'left',
  },
});
