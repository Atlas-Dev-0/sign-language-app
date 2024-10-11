import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import signDescriptions from '../assets/dataset/categories/alphabets/alphabets-data.json'; // Import the JSON file

// Define the type for the navigation stack
type RootStackParamList = {
  'Sign Preview': { image: string, title: string, description: string };
};

// Dynamically generate alphabet data (A-Z)
const data = Array.from({ length: 26 }, (_, i) => {
  const letter = String.fromCharCode(65 + i); // Generate letter A-Z
  return {
    letter: letter,
    image: `../assets/images/categories/alphabets/${letter}.png`, // Generate image path
    title: `Sign ${letter}`, // Generate title
    description: signDescriptions[letter].description, // Get description from JSON file
  };
});

export default function AlphabetsScreen() {
  // Use navigation with the typed navigation prop
  const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ThemedView style={styles.FullScreenContainer}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.gridContainer}>
          {data.map((item) => (
            <TouchableOpacity
              key={item.letter}
              style={styles.gridItem}
              onPress={() => nav.navigate('Sign Preview', {
                image: item.image, // Pass the image URL
                title: item.title,
                description: item.description // Pass the description from the JSON file
              })}
            >
              <ThemedText style={styles.navText}>{item.letter}</ThemedText>
            </TouchableOpacity>
          ))}
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  FullScreenContainer: {
    backgroundColor: '#FFDD67',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDD67',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#FFDD67',
  },
  gridItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  navText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
});
