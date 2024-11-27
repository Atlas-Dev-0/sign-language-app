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
  Goodmorning: {
    video: require('../assets/images/categories/greetings_and_phrases/Goodmorning.mp4'),
    title: 'Good Morning',
    description: 'Start with your dominant hand flat, fingers together, and raise it from your chest upwards, as if to mimic the rising sun.',
  },
  Goodnight: {
    video: require('../assets/images/categories/greetings_and_phrases/Goodnight.mp4'),
    title: 'Good Night',
    description: 'Form a "C" shape with both hands, and gently lower one hand over the other as if covering something.',
  },
  'Happy birthday': {
    video: require('../assets/images/categories/greetings_and_phrases/Happy birthday.mp4'),
    title: 'Happy Birthday',
    description: 'Start by patting your chest with both hands, and then move your dominant hand towards your mouth, mimicking blowing out a candle.',
  },
  'I_m sorry': {
    video: require('../assets/images/categories/greetings_and_phrases/I_m sorry.mp4'),
    title: 'I\'m Sorry',
    description: 'Sign "I\'m Sorry": Make a fist with your dominant hand and rub it in a circular motion over your chest.',
  },
  'Nice to meet you': {
    video: require('../assets/images/categories/greetings_and_phrases/Nice to meet you.mp4'),
    title: 'Nice to Meet You',
    description: ' Place one hand palm down and slide it forward, then bring both index fingers together, pointing towards the person you are greeting.',
  },
  Please: {
    video: require('../assets/images/categories/greetings_and_phrases/Please.mp4'),
    title: 'Please',
    description: 'Place your dominant hand on your chest and move it in a circular motion.',
  },
  'Thank you': {
    video: require('../assets/images/categories/greetings_and_phrases/Thank you.mp4'),
    title: 'Thank You',
    description: 'Place your fingers near your mouth and move your hand away, as if blowing a kiss.',
  },
};

export default function GreetingsAndPhrasesScreen() {
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDD67',
  },
});
