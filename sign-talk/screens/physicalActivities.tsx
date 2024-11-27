import React from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';

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
  Dancing: {
    video: require('../assets/images/categories/physical_activities/Dancing.mp4'),
    title: 'Dancing',
    description: 'With both hands slightly raised, sway side to side in a rhythmic motion, as if mimicking a dance.',
  },
  Jumping: {
    video: require('../assets/images/categories/physical_activities/Jumping.mp4'),
    title: 'Jumping',
    description: 'Hold both hands flat, palms facing down, and move them upwards in a quick motion, as if mimicking a jump.',
  },
  Playing: {
    video: require('../assets/images/categories/physical_activities/Playing.mp4'),
    title: 'Playing',
    description: 'Use both hands to form a "Y" shape (thumbs and pinkies extended), then move them in circles as if enjoying a playful activity.',
  },
  Running: {
    video: require('../assets/images/categories/physical_activities/Running.mp4'),
    title: 'Running',
    description: 'Make an "L" shape with your dominant hand and mimic running by moving it quickly in a forward motion.',
  },
  Walking: {
    video: require('../assets/images/categories/physical_activities/Walking.mp4'),
    title: 'Walking',
    description: 'Extend both hands and move them alternately in front of you, as if taking steps in place.',
  },
};

export default function PhysicalActivities() {
  const navigation = useNavigation<NavigationProp>();
  const videoKeys = Object.keys(video_data) as (keyof typeof video_data)[];

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.container}
        colors={["#ff0070", "#6fb7ff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <ScrollView contentContainerStyle={styles.gridContainer}>
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
        </ScrollView>
      </LinearGradient>
    </View >
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
    width: '95%',
    height: '95%',
  },
  gridItem: {
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.24,
    shadowRadius: 8,
    elevation: 5,
    textAlign: 'center',
    width: 150,
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
