import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';

// Define the type for the navigation stack
type RootStackParamList = {
  'Sign Video': { video: any; title: string; description: string };
};

// Define the navigation prop
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Sign Video'>;

// Define the type for video object
interface VideoData {
  video: any;
  title: string;
  description: string;
}

// Map each color to its corresponding video and hardcoded description
const video_data: Record<string, VideoData> = {
  White: {
    video: require('../assets/images/categories/colors/White.mp4'),
    title: 'White',
    description: 'Pull your fingers away from your chest, symbolizing purity.',
  },
  Yellow: {
    video: require('../assets/images/categories/colors/Yellow.mp4'),
    title: 'Yellow',
    description: 'Shake your hand with your thumb and pinky extended, symbolizing sunshine.',
  },
  Pink: {
    video: require('../assets/images/categories/colors/Pink.mp4'),
    title: 'Pink',
    description: 'Swipe your middle finger down your lips, symbolizing lipstick.',
  },
  Gold: {
    video: require('../assets/images/categories/colors/Gold.mp4'),
    title: 'Gold',
    description: 'Touch your ear with your index finger, then move outward, mimicking a shining motion.',
  },
  Orange: {
    video: require('../assets/images/categories/colors/Orange.mp4'),
    title: 'Orange',
    description: 'Squeeze your fist near your mouth as if mimicking squeezing an orange.',
  },
  Green: {
    video: require('../assets/images/categories/colors/Green.mp4'),
    title: 'Green',
    description: 'Shake your hand in front of you with your thumb and index finger pinched, symbolizing leaves.',
  },
  Blue: {
    video: require('../assets/images/categories/colors/Blue.mp4'),
    title: 'Blue',
    description: 'Wave your hand in front of you with your palm facing outward, mimicking the color of the sky.',
  },
  Red: {
    video: require('../assets/images/categories/colors/Red.mp4'),
    title: 'Red',
    description: 'Swipe your index finger down your lips, symbolizing a blush.',
  },
  Purple: {
    video: require('../assets/images/categories/colors/Purple.mp4'),
    title: 'Purple',
    description: 'Shake your hand with your index and middle finger extended, representing royalty.',
  },
  Brown: {
    video: require('../assets/images/categories/colors/Brown.mp4'),
    title: 'Brown',
    description: 'Swipe your hand down the side of your face with your fingers extended, symbolizing the earth.',
  },
  Gray: {
    video: require('../assets/images/categories/colors/Gray.mp4'),
    title: 'Gray',
    description: 'Move your open hands past each other, symbolizing blending.',
  },
  Black: {
    video: require('../assets/images/categories/colors/Black.mp4'),
    title: 'Black',
    description: 'Swipe your index finger across your forehead from one side to the other.',
  },
  Dark: {
    video: require('../assets/images/categories/colors/Dark.mp4'),
    title: 'Dark',
    description: 'Cover your eyes with both hands and then move them away, mimicking darkness.',
  },
  Silver: {
    video: require('../assets/images/categories/colors/Silver.mp4'),
    title: 'Silver',
    description: 'Touch your ear with your index finger, then shake your hand outward, mimicking a sparkle.',
  },
};

export default function Colors() {
  const navigation = useNavigation<NavigationProp>();
  const videoKeys = Object.keys(video_data) as (keyof typeof video_data)[];

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.container}
        colors={['#ff0070', '#6fb7ff']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <ScrollView contentContainerStyle={styles.gridContainer}>
          {videoKeys.map((key) => {
            // Set background color for each item
            let backgroundColor = key.toLowerCase();
            let textColor = '#FFF'; // Default text color for most colors

            if (key === 'Yellow' || key === 'Gold') {
              textColor = '#000'; // Set text color to black for White
            }
            if (key === 'Light' || key === 'Dark') {
              backgroundColor = key === 'Light' ? '#E0E0E0' : '#333333';
              textColor = '#FFF'; // Ensure white text for light/dark items
            }

            if (key === 'White') {
              textColor = '#000'; // Set text color to black for White
            }


            if (key === 'Pink') {
              backgroundColor = '#FF69B4'; // More vibrant pink for Pink
            }

            return (
              <TouchableOpacity
                key={key}
                style={[styles.gridItem, { backgroundColor }]} // Dynamically set background color
                onPress={() =>
                  navigation.navigate('Sign Video', {
                    video: video_data[key].video,
                    title: video_data[key].title,
                    description: video_data[key].description,
                  })
                }
              >
                <ThemedText style={[styles.navText, { color: textColor }]}>
                  {video_data[key].title}
                </ThemedText>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20, // Add padding for scrolling
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
  },
  navText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
