import React from 'react';
import { useState, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Video, ResizeMode } from 'expo-av';

// Define the type for the route params
type RootStackParamList = {
  'Sign Video': { video: any; title: string; description: string }; // Use 'any' for video type
};

// Define the route type for Sign Preview screen
type SignPreviewRouteProp = RouteProp<RootStackParamList, 'Sign Video'>;

export default function VideoScreen() {
  const route = useRoute<SignPreviewRouteProp>();
  const { video, title, description } = route.params; // Retrieve the video, title, and description from route params
  const [status, setStatus] = useState({});
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.card}>
        <Video
          style={styles.video}
          source={video}
          resizeMode={ResizeMode.COVER}
          useNativeControls // Enable native controls
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <ThemedView style={styles.textContainer}>
          <ThemedText style={styles.title}>{title}</ThemedText>
          <ThemedText style={styles.subtitle}>Instructions:</ThemedText>
          <ThemedText style={styles.description}>{description}</ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make sure the container fills the screen
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDD68',
  },
  card: {
    height: "90%",
    width: "94%",
    backgroundColor: '#fff',
    borderRadius: 11,
    borderCurve: 'circular',
    shadowColor: '#001',
    shadowOpacity: 1.2,
    shadowRadius: 6,
    shadowOffset: { width: 1, height: 2 },
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 11,
    paddingRight: 11,
    paddingTop: 20,
  },
  video: {
    width: "100%", // Set width to fill the card
    height: 200, // Set a fixed height for the video, adjust as needed
  },
  textContainer: {
    marginTop: 1,
    width: '101%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 41,
    fontWeight: 'bold',
    color: '#001',
    marginBottom: 11,
    marginTop: 31,
    paddingTop: 16,
  },
  subtitle: {
    marginTop: 31,
    marginBottom: 21,
    fontSize: 21,
    fontWeight: 'bold',
    color: '#001',
  },
  description: {
    fontSize: 17,
    color: '#334',
    textAlign: 'center',
  },
});
