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
  Aunt: {
    video: require('../assets/images/categories/people/Aunt.mp4'),
    title: 'Aunt',
    description: 'Tap your cheek with your thumb, mimicking the motion of a kiss.',
  },
  Baby: {
    video: require('../assets/images/categories/people/Baby.mp4'),
    title: 'Baby',
    description: 'Cradle your arms together as if holding a baby.',
  },
  Brother: {
    video: require('../assets/images/categories/people/Brother.mp4'),
    title: 'Brother',
    description: 'Touch your forehead with your thumb, then bring your hands together like a handshake.',
  },
  Father: {
    video: require('../assets/images/categories/people/Father.mp4'),
    title: 'Father',
    description: 'Tap your forehead with your thumb, representing respect and authority.',
  },
  Grandfather: {
    video: require('../assets/images/categories/people/Grandfather.mp4'),
    title: 'Grandfather',
    description: 'Touch your forehead with your thumb, then make a forward circular motion.',
  },
  Grandmother: {
    video: require('../assets/images/categories/people/Grandmother.mp4'),
    title: 'Grandmother',
    description: 'Touch your chin with your thumb, then make a forward circular motion.',
  },
  Mother: {
    video: require('../assets/images/categories/people/Mother.mp4'),
    title: 'Mother',
    description: 'Tap your chin with your thumb, representing affection and care.',
  },
  Sister: {
    video: require('../assets/images/categories/people/Sister.mp4'),
    title: 'Sister',
    description: 'Touch your chin with your thumb, then bring your hands together like a handshake.',
  },
  Uncle: {
    video: require('../assets/images/categories/people/Uncle.mp4'),
    title: 'Uncle',
    description: 'Tap your cheek with your index finger, mimicking a cheerful gesture.',
  },
};

export default function Animals() {
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
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
