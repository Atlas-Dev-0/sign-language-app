import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useNavigation } from '@react-navigation/native';

export default function Categories() {
  const nav = useNavigation(); // Get the navigation object
  return (
    <ThemedView style={styles.fullScreenContainer}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.gridContainer}>
          <TouchableOpacity style={styles.gridItem} onPress={() => nav.navigate('Alphabets' as never)}>
            <Image source={require('../assets/images/buttons/ALPHABETS_BUTTON.png')} style={styles.gridImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem} onPress={() => nav.navigate('Greetings And Phrases' as never)}>
            <Image source={require('@/assets/images/buttons/GREETINGS_AND_PHRASES_BUTTON.png')} style={styles.gridImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem} onPress={() => nav.navigate('Numbers' as never)}>
            <Image source={require('@/assets/images/buttons/NUMBERS_BUTTON.png')} style={styles.gridImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem} onPress={() => nav.navigate('Days' as never)}>
            <Image source={require('@/assets/images/buttons/DAYS_BUTTON.png')} style={styles.gridImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem} onPress={() => nav.navigate('Animals' as never)}>
            <Image source={require('@/assets/images/buttons/ANIMALS_BUTTON.png')} style={styles.gridImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem} onPress={() => nav.navigate('Physical Activities' as never)}>
            <Image source={require('@/assets/images/buttons/PHYSICAL_BUTTON.png')} style={styles.gridImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem} onPress={() => nav.navigate('Quiz' as never)}>
            <Image source={require('@/assets/images/buttons/QUIZ_BUTTON.png')} style={styles.gridImage} />
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  fullScreenContainer: {
    backgroundColor: "#FFDD67", // Yellow background to match body-like color
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    backgroundColor: "#FFDD67", // Yellow background like the body
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "90%", // Adjust the width of the grid container as needed
    backgroundColor: "#FFDD67",
  },
  gridItem: {
    width: 140, // Square size
    height: 140, // Square size
    justifyContent: "center",
    alignItems: "center",
    margin: 10, // Spacing between the squares
    borderRadius: 10, // Optional for rounded corners
  },
  gridImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain", // Adjust the image to fit inside the grid item
  },
  navText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
});
