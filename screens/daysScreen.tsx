import React from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native'; // For navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';

// Define the navigation stack parameters
type RootStackParamList = {
  'Sign Video': { video: any; title: string; description: string }; // Define the params for VideoScreen
};

// Define the navigation prop type
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Sign Video'>;

// Define the type for the video object
interface VideoData {
  video: any;
  title: string;
  description: string;
}

// Define the videos object with sign language instructions for each day
const videos: Record<string, VideoData> = {
  Monday: {
    video: require('../assets/images/categories/day/Monday.mp4'),
    title: 'Monday Sign',
    description: 'Hold up your dominant hand, palm facing forward, and make an “M” shape using your three fingers.'
  },
  Tuesday: {
    video: require('../assets/images/categories/day/Tuesday.mp4'),
    title: 'Tuesday Sign',
    description: 'Make a “T” shape with your hand by tucking your thumb under your index finger and rotating your wrist.'
  },
  Wednesday: {
    video: require('../assets/images/categories/day/Wednesday.mp4'),
    title: 'Wednesday Sign',
    description: 'Form a “W” with three fingers extended and move your hand in small circles.'
  },
  Thursday: {
    video: require('../assets/images/categories/day/Thursday.mp4'),
    title: 'Thursday Sign',
    description: 'Use your dominant hand to form a “T” and move it in a small circular motion.'
  },
  Friday: {
    video: require('../assets/images/categories/day/Friday.mp4'),
    title: 'Friday Sign',
    description: 'Form an “F” shape by touching your thumb and index finger together, and rotate your wrist in small circles.'
  },
  Saturday: {
    video: require('../assets/images/categories/day/Saturday.mp4'),
    title: 'Saturday Sign',
    description: 'Form an “S” by making a fist, then move your fist in a circular motion.'
  },
  Sunday: {
    video: require('../assets/images/categories/day/Sunday.mp4'),
    title: 'Sunday Sign',
    description: 'Hold both hands out in front of you, palms facing out, and make small upward movements.'
  },
};

export default function Days() {
  const navigation = useNavigation<NavigationProp>(); // Type navigation with the correct stack type

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const; // Define days as a tuple for stricter typing

  const handlePress = (day: typeof daysOfWeek[number]) => {
    const { video, title, description } = videos[day];
    navigation.navigate('Sign Video', { video, title, description }); // Navigate and pass the video data
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.container}
        colors={["#ff0070", "#6fb7ff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <ScrollView contentContainerStyle={styles.gridContainer}>
          {daysOfWeek.map((day) => (
            <TouchableOpacity key={day} style={styles.gridItem} onPress={() => handlePress(day)}>
              <ThemedText style={styles.navText}>{day}</ThemedText>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%",
    width: "100%",
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  gridItem: {
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
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
});
