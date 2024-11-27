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
  Bird: {
    video: require('../assets/images/categories/animals/Bird.mp4'),
    title: 'Bird',
    description: 'Pinch your thumb and index finger together near your mouth and mimic a beak opening and closing.',
  },
  Butterfly: {
    video: require('../assets/images/categories/animals/Butterfly.mp4'),
    title: 'Butterfly',
    description: 'Place your hands on your chest, then flutter them outward like butterfly wings.',
  },
  Cat: {
    video: require('../assets/images/categories/animals/Cat.mp4'),
    title: 'Cat',
    description: 'Use your thumb and index finger to pinch together near the sides of your mouth, mimicking whiskers.',
  },
  Chicken: {
    video: require('../assets/images/categories/animals/Chicken.mp4'),
    title: 'Chicken',
    description: 'Move your fingers near your throat, mimicking the beak and neck of a chicken.',
  },
  Cow: {
    video: require('../assets/images/categories/animals/Cow.mp4'),
    title: 'Cow',
    description: 'Place your fingers on the side of your head, mimicking cow horns.',
  },
  Crocodile: {
    video: require('../assets/images/categories/animals/Crocodile.mp4'),
    title: 'Crocodile',
    description: 'Make a snapping motion with your hands in front of your face, mimicking the jaws of a crocodile.',
  },
  Dog: {
    video: require('../assets/images/categories/animals/Dog.mp4'),
    title: 'Dog',
    description: 'Pat your leg with one hand, as if calling a dog, then snap your fingers.',
  },
  Elephant: {
    video: require('../assets/images/categories/animals/Elephant.mp4'),
    title: 'Elephant',
    description: 'Extend your arm in front of you and mimic the trunk of an elephant with your hand.',
  },
  Fish: {
    video: require('../assets/images/categories/animals/Fish.mp4'),
    title: 'Fish',
    description: 'Move your hands in front of your face as if mimicking a fish swimming.',
  },
  Frog: {
    video: require('../assets/images/categories/animals/Frog.mp4'),
    title: 'Frog',
    description: 'Make a leaping motion with your hands as if mimicking a frog jumping.',
  },
  Giraffe: {
    video: require('../assets/images/categories/animals/Giraffe.mp4'),
    title: 'Giraffe',
    description: 'Extend your neck and fingers upward, mimicking the long neck of a giraffe.',
  },
  Horse: {
    video: require('../assets/images/categories/animals/Horse.mp4'),
    title: 'Horse',
    description: 'Mimic the movement of a horse by moving your hands like hooves and tapping them in rhythm.',
  },
  Monkey: {
    video: require('../assets/images/categories/animals/Monkey.mp4'),
    title: 'Monkey',
    description: 'Mimic the movement of a monkey by holding your hands near your sides and swinging them up and down.',
  },
  Penguin: {
    video: require('../assets/images/categories/animals/Penguin.mp4'),
    title: 'Penguin',
    description: 'Make a waddling motion with your hands by moving your arms in a small, back-and-forth motion.',
  },
  Pig: {
    video: require('../assets/images/categories/animals/Pig.mp4'),
    title: 'Pig',
    description: 'Make a snout shape with your hands and wiggle your fingers.',
  },
  Rabbit: {
    video: require('../assets/images/categories/animals/Rabbit.mp4'),
    title: 'Rabbit',
    description: 'Mimic rabbit ears by forming a V shape with your index and middle fingers near your head.',
  },
  Snake: {
    video: require('../assets/images/categories/animals/Snake.mp4'),
    title: 'Snake',
    description: 'Move your hands in a slithering motion as if mimicking a snake.',
  },
  Tiger: {
    video: require('../assets/images/categories/animals/Tiger.mp4'),
    title: 'Tiger',
    description: 'Extend your fingers and bring your hands to your face, then pull them away, mimicking a tiger scratching with claws.',
  },
  Turtle: {
    video: require('../assets/images/categories/animals/Turtle.mp4'),
    title: 'Turtle',
    description: 'Form a shell shape with your hands and curl your fingers inward.',
  },
  Zebra: {
    video: require('../assets/images/categories/animals/Zebra.mp4'),
    title: 'Zebra',
    description: 'Move your hands in a striping motion as if mimicking the stripes of a zebra.',
  },
};

export default function Animals() {
  const navigation = useNavigation<NavigationProp>();
  const videoKeys = Object.keys(video_data) as (keyof typeof video_data)[];

  return (
    <View style={styles.container}>

      <LinearGradient
        style={styles.bgcontainer}
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
  bgcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridContainer: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  gridItem: {
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.24,
    shadowRadius: 8,
    elevation: 5,
    textAlign: 'center',
    width: 100,
    height: 100,
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
