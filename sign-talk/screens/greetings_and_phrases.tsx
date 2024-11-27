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
  'Do you want to play': {
    video: require('../assets/images/categories/greetings_and_phrases/do you want to play.mp4'),
    title: 'Do You Want to Play',
    description: 'Extend your hand out with your fingers pointing upwards, and move your hand towards the person, mimicking inviting them to play.',
  },
  'Good afternoon': {
    video: require('../assets/images/categories/greetings_and_phrases/goodafternoon.mp4'),
    title: 'Good Afternoon',
    description: 'Place your hand flat against your forehead and sweep it down, as if creating a wave across the sky during the afternoon.',
  },
  'Good morning': {
    video: require('../assets/images/categories/greetings_and_phrases/Goodmorning.mp4'),
    title: 'Good Morning',
    description: 'Start with your dominant hand flat, fingers together, and raise it from your chest upwards, as if to mimic the rising sun.',
  },
  'Good night': {
    video: require('../assets/images/categories/greetings_and_phrases/Goodnight.mp4'),
    title: 'Good Night',
    description: 'Form a "C" shape with both hands, and gently lower one hand over the other as if covering something.',
  },
  'Hello': {
    video: require('../assets/images/categories/greetings_and_phrases/hello.mp4'),
    title: 'Hello',
    description: 'Wave your hand back and forth in front of you, as if signaling hello.',
  },
  'Here\'s a hug': {
    video: require('../assets/images/categories/greetings_and_phrases/here_s_a_hug.mp4'),
    title: 'Here\'s a Hug',
    description: 'Open your arms wide and bring them close together, mimicking an embrace.',
  },
  'Hi': {
    video: require('../assets/images/categories/greetings_and_phrases/hi.mp4'),
    title: 'Hi',
    description: 'Extend your fingers upwards and gently shake them back and forth.',
  },
  'How are you?': {
    video: require('../assets/images/categories/greetings_and_phrases/how are you.mp4'),
    title: 'How Are You?',
    description: 'Form a "C" shape with your hand and move it from your chest towards the person you are greeting, mimicking a question.',
  },
  'I love you': {
    video: require('../assets/images/categories/greetings_and_phrases/I love you.mp4'),
    title: 'I Love You',
    description: 'Extend your hand with your index, pinky, and thumb fingers extended, mimicking the ASL "I Love You" sign.',
  },
  'I\'m happy': {
    video: require('../assets/images/categories/greetings_and_phrases/I_m happy.mp4'),
    title: 'I\'m Happy',
    description: 'Form a smile with your mouth and place both hands close to your cheeks, mimicking happiness.',
  },
  'I\'m sorry': {
    video: require('../assets/images/categories/greetings_and_phrases/I_m sorry.mp4'),
    title: 'I\'m Sorry',
    description: 'Sign "I\'m Sorry": Make a fist with your dominant hand and rub it in a circular motion over your chest.',
  },
  'May I go to the bathroom?': {
    video: require('../assets/images/categories/greetings_and_phrases/may i go to the bathroom.mp4'),
    title: 'May I Go to the Bathroom?',
    description: 'Extend your index finger and point it towards the ground, then bring it back up towards your chest.',
  },
  'Nice to meet you': {
    video: require('../assets/images/categories/greetings_and_phrases/Nice to meet you.mp4'),
    title: 'Nice to Meet You',
    description: 'Place one hand palm down and slide it forward, then bring both index fingers together, pointing towards the person you are greeting.',
  },
  'Please': {
    video: require('../assets/images/categories/greetings_and_phrases/Please.mp4'),
    title: 'Please',
    description: 'Place your dominant hand on your chest and move it in a circular motion.',
  },
  'See you tomorrow': {
    video: require('../assets/images/categories/greetings_and_phrases/see you tomorrow.mp4'),
    title: 'See You Tomorrow',
    description: 'Wave your hand in an arc motion, from your shoulder to your opposite shoulder, mimicking a wave goodbye.',
  },
  'Thank you': {
    video: require('../assets/images/categories/greetings_and_phrases/Thank you.mp4'),
    title: 'Thank You',
    description: 'Place your fingers near your mouth and move your hand away, as if blowing a kiss.',
  },
  'What are you doing today?': {
    video: require('../assets/images/categories/greetings_and_phrases/what are you doing today.mp4'),
    title: 'What Are You Doing Today?',
    description: 'Extend your index finger and move it back and forth while pointing towards yourself and then the person you are asking.',
  },
  'What\'s your name?': {
    video: require('../assets/images/categories/greetings_and_phrases/what_s your name.mp4'),
    title: 'What\'s Your Name?',
    description: 'Form an open palm with your hand and move it towards your chin, mimicking a question about identity.',
  },
  'You\'re welcome': {
    video: require('../assets/images/categories/greetings_and_phrases/you_re welcome.mp4'),
    title: 'You\'re Welcome',
    description: 'Extend your hand palm down and move it away from you as if presenting something back to the person.',
  },
};

export default function GreetingsAndPhrasesScreen() {
  const navigation = useNavigation<NavigationProp>();
  const videoKeys = Object.keys(video_data) as (keyof typeof video_data)[];
  return (
    <View styles={styles.container}>
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
      </LinearGradient >
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%",
  },
  gridContainer: {
    marginBottom: 30,
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  gridItem: {
    padding: 20,
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
});
