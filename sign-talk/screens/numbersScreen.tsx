import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import signDescriptions from '../assets/dataset/categories/numbers/number-data.json';

// Define the type for the navigation stack
type RootStackParamList = {
  'Sign Preview': { image: any; title: string; description: string };
};

// Define the type for signDescriptions based on your JSON structure
type SignDescriptionsType = {
  [key: string]: { description: string };
};

const images: { [key: string]: any } = {
  1: require('../assets/images/categories/numbers/1.png'),
  2: require('../assets/images/categories/numbers/2.png'),
  3: require('../assets/images/categories/numbers/3.png'),
  4: require('../assets/images/categories/numbers/4.png'),
  5: require('../assets/images/categories/numbers/5.png'),
  6: require('../assets/images/categories/numbers/6.png'),
  7: require('../assets/images/categories/numbers/7.png'),
  8: require('../assets/images/categories/numbers/8.png'),
  9: require('../assets/images/categories/numbers/9.png'),
  10: require('../assets/images/categories/numbers/10.png'),
};

const string_numbers = [
  "one", "two", "three", "four", "five",
  "six", "seven", "eight", "nine", "ten"
];

const data = Array.from({ length: 10 }, (_, i) => {
  const number = i + 1;
  const numberKey = string_numbers[i]; // Access key from array

  return {
    number: number,
    image: images[number], // Use key to access the image
    title: `Sign ${number}`,
    description: (signDescriptions as SignDescriptionsType)[numberKey]?.description || 'No description available', // Use type assertion
  };
});

export default function NumbersScreen() {
  // Use navigation with the typed navigation prop
  const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ThemedView style={styles.FullScreenContainer}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.gridContainer}>
          {data.map((item) => (
            <TouchableOpacity
              key={item.number} // Use number as the key
              style={styles.gridItem}
              onPress={() =>
                nav.navigate('Sign Preview', {
                  image: item.image,
                  title: item.title,
                  description: item.description,
                })
              }
            >
              <ThemedText style={styles.navText}>{item.number}</ThemedText>
            </TouchableOpacity>
          ))}
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 55,
    marginBottom: 5,
    backgroundColor: '#FFDD67', // Adjust to match your design
  },
  container: {
    marginTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDD67', // Yellow background like the body
  },
  FullScreenContainer: {
    backgroundColor: '#FFDD67', // Yellow background to match body-like color
  },
  backButton: {
    marginRight: 10,
    marginLeft: 10,
  },
  backButtonText: {
    fontSize: 22,
    color: '#333', // Adjust for contrast
  },
  navText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333', // Adjust for contrast
  },
  logo: {
    width: 290,
    height: 290,
    resizeMode: 'contain',
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333', // Dark text color
    marginTop: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Adjust the width of the grid container as needed
    backgroundColor: '#FFDD67', // Yellow background to match body-like color
  },
  gridItem: {
    width: 100, // Increase the size of each grid item for larger boxes
    height: 100, // Increase the size of each grid item for larger boxes
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    margin: 15, // Spacing between the squares
    borderRadius: 10, // Optional for rounded corners
  },
  gridText: {
    fontSize: 18,
    color: '#333', // Adjust text color for contrast
  },
  gridImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Adjust the image to fit inside the grid item
  },
});
