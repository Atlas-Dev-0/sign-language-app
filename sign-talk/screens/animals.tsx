import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define the type for the navigation stack
type RootStackParamList = {
  'Sign Video': { video: any; title: string; description: string }; // Use 'any' for video type
};

// Define the navigation prop
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Sign Video'>;

// Define the type for video object
interface VideoData {
  video: any;
  title: string;
  description: string;
}

// Map each greeting/phrase to its corresponding video and hardcoded description
const video_data: Record<string, VideoData> = {
  Bird: {
    video: require('../assets/images/categories/animals/Bird.mp4'),
    title: 'Bird',
    description: 'Sign "Bird": Pinch your thumb and index finger together near your mouth and mimic a beak opening and closing.',
  },
  Cat: {
    video: require('../assets/images/categories/animals/Cat.mp4'),
    title: 'Cat',
    description: 'Sign "Cat": Use your thumb and index finger to pinch together near the sides of your mouth, mimicking whiskers.',
  },
  Dog: {
    video: require('../assets/images/categories/animals/Dog.mp4'),
    title: 'Dog',
    description: 'Sign "Dog": Pat your leg with one hand, as if calling a dog, then snap your fingers.',
  },
  Tiger: {
    video: require('../assets/images/categories/animals/Tiger.mp4'),
    title: 'Tiger',
    description: 'Sign "Tiger": Extend your fingers and bring your hands to your face, then pull them away, mimicking a tiger scratching with claws.',
  },
};

export default function Animals() {
  const navigation = useNavigation<NavigationProp>();
  const videoKeys = Object.keys(video_data) as (keyof typeof video_data)[];

  return (
    <ThemedView style={styles.FullScreenContainer}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.gridContainer}>
          {videoKeys.map((key) => (
            <TouchableOpacity
              key={key}
              style={styles.gridItem}
              onPress={() =>
                navigation.navigate('Sign Video', {
                  video: video_data[key].video, // Pass the video URL directly
                  title: video_data[key].title,
                  description: video_data[key].description, // Pass the hardcoded description
                })
              }
            >
              <ThemedText style={styles.navText}>{video_data[key].title}</ThemedText>
            </TouchableOpacity>
          ))}
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  FullScreenContainer: {
    flex: 1,
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
    textAlign: "center",
    padding: 25,
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  navText: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
