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
  Balance: {
    video: require('../assets/images/categories/physical_activities/balance.mp4'),
    title: 'Balance',
    description: 'Stand on one leg with arms stretched out to the sides, mimicking a balancing motion.',
  },
  Cleaning: {
    video: require('../assets/images/categories/physical_activities/cleaning.mp4'),
    title: 'Cleaning',
    description: 'Use both hands to mimic wiping a surface in a circular motion.',
  },
  Climbing: {
    video: require('../assets/images/categories/physical_activities/climbing.mp4'),
    title: 'Climbing',
    description: 'Use both hands alternately in a pulling motion, as if climbing a ladder.',
  },
  Crawl: {
    video: require('../assets/images/categories/physical_activities/crawl.mp4'),
    title: 'Crawl',
    description: 'Position both hands palm down and move them forward alternately, mimicking crawling.',
  },
  FollowTheLeader: {
    video: require('../assets/images/categories/physical_activities/follow the leader.mp4'),
    title: 'Follow the Leader',
    description: 'Point forward with one hand and mimic walking behind, as if following someone.',
  },
  FreezeDance: {
    video: require('../assets/images/categories/physical_activities/freeze dance.mp4'),
    title: 'Freeze Dance',
    description: 'Dance freely with both hands raised, then pause suddenly, mimicking a freeze.',
  },
  Holding: {
    video: require('../assets/images/categories/physical_activities/holding.mp4'),
    title: 'Holding',
    description: 'Clasp both hands together, mimicking holding an object securely.',
  },
  HulaHooping: {
    video: require('../assets/images/categories/physical_activities/hula hooping.mp4'),
    title: 'Hula Hooping',
    description: 'Place hands on hips and rotate in a circular motion, mimicking hula hooping.',
  },
  Planting: {
    video: require('../assets/images/categories/physical_activities/planting.mp4'),
    title: 'Planting',
    description: 'Use both hands to mimic digging a hole and planting a seed.',
  },
  Stretching: {
    video: require('../assets/images/categories/physical_activities/stretching.mp4'),
    title: 'Stretching',
    description: 'Extend both arms upwards or sideways, as if reaching for something.',
  },
  Swimming: {
    video: require('../assets/images/categories/physical_activities/swimming.mp4'),
    title: 'Swimming',
    description: 'Move both arms alternately in a wide circular motion, as if swimming.',
  },
  Throwing: {
    video: require('../assets/images/categories/physical_activities/throwing.mp4'),
    title: 'Throwing',
    description: 'Hold one hand back and then thrust it forward, mimicking throwing a ball.',
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
