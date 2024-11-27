import React from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import signDescriptions from '../assets/dataset/categories/numbers/number-data.json';
import { LinearGradient } from 'expo-linear-gradient';

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
    <View style={styles.container}>
      <LinearGradient
        style={styles.container}
        colors={["#ff0070", "#6fb7ff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <ScrollView contentContainerStyle={styles.gridContainer}>
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
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  gridItem: {
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.24,
    shadowRadius: 8,
    elevation: 5,
    textAlign: 'center',
    width: 160,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  navText: {
    padding: 10,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
});
