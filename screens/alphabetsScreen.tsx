import React from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import signDescriptions from '../assets/dataset/categories/alphabets/alphabets-data.json'; // Import the JSON file

// Define the type for the navigation stack
type RootStackParamList = {
  'Sign Preview': { image: any; title: string; description: string }; // Use 'any' for image type
};

// Map each letter to its corresponding image
const images: { [key: string]: any } = {
  A: require('../assets/images/categories/alphabets/A.png'),
  B: require('../assets/images/categories/alphabets/B.png'),
  C: require('../assets/images/categories/alphabets/C.png'),
  D: require('../assets/images/categories/alphabets/D.png'),
  E: require('../assets/images/categories/alphabets/E.png'),
  F: require('../assets/images/categories/alphabets/F.png'),
  G: require('../assets/images/categories/alphabets/G.png'),
  H: require('../assets/images/categories/alphabets/H.png'),
  I: require('../assets/images/categories/alphabets/I.png'),
  J: require('../assets/images/categories/alphabets/J.png'),
  K: require('../assets/images/categories/alphabets/K.png'),
  L: require('../assets/images/categories/alphabets/L.png'),
  M: require('../assets/images/categories/alphabets/M.png'),
  N: require('../assets/images/categories/alphabets/N.png'),
  O: require('../assets/images/categories/alphabets/O.png'),
  P: require('../assets/images/categories/alphabets/P.png'),
  Q: require('../assets/images/categories/alphabets/Q.png'),
  R: require('../assets/images/categories/alphabets/R.png'),
  S: require('../assets/images/categories/alphabets/S.png'),
  T: require('../assets/images/categories/alphabets/T.png'),
  U: require('../assets/images/categories/alphabets/U.png'),
  V: require('../assets/images/categories/alphabets/V.png'),
  W: require('../assets/images/categories/alphabets/W.png'),
  X: require('../assets/images/categories/alphabets/X.png'),
  Y: require('../assets/images/categories/alphabets/Y.png'),
  Z: require('../assets/images/categories/alphabets/Z.png'),
};

// Dynamically generate alphabet data (A-Z)
const data = Array.from({ length: 26 }, (_, i) => {
  const letter = String.fromCharCode(65 + i); // Generate letter A-Z
  return {
    letter: letter,
    image: images[letter], // Use the mapping object
    title: `Sign ${letter}`, // Generate title
    description: signDescriptions[letter as keyof typeof signDescriptions].description
  };
});

export default function AlphabetsScreen() {
  // Use navigation with the typed navigation prop
  const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View styles={styles.container}>
      <LinearGradient
        style={styles.container}
        colors={["#ff0070", "#6fb7ff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <ScrollView contentContainerStyle={styles.gridContainer}>
          {data.map((item) => (
            <TouchableOpacity
              key={item.letter}
              style={styles.gridItem}
              onPress={() =>
                nav.navigate('Sign Preview', {
                  image: item.image, // Pass the image URL directly
                  title: item.title,
                  description: item.description, // Pass the description from the JSON file
                })
              }
            >
              <ThemedText style={styles.navText}>{item.letter}</ThemedText>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </LinearGradient >
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
  },
  gridItem: {
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.24,
    shadowRadius: 8,
    elevation: 5,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  navText: {
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
});
