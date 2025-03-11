import React, { useState, useRef } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';
import { LinearGradient } from 'expo-linear-gradient';

// Define the type for the route params
type RootStackParamList = {
  'Sign Video': { video: any; title: string; description: string }; // Use 'any' for video type
};

// Define the route type for Sign Preview screen
type SignPreviewRouteProp = RouteProp<RootStackParamList, 'Sign Video'>;

export default function VideoScreen() {
  const route = useRoute<SignPreviewRouteProp>();
  const { video, title, description } = route.params; // Retrieve the video, title, and description from route params
  const [status, setStatus] = useState<AVPlaybackStatus | undefined>(undefined); // Use AVPlaybackStatus type

  const onFullscreenUpdate = async ({ fullscreenUpdate }: { fullscreenUpdate: number }) => {
    switch (fullscreenUpdate) {
      case 0: // Video.FULLSCREEN_UPDATE_PLAYER_DID_PRESENT
      case 1:
        await ScreenOrientation.unlockAsync(); // only on Android required
        break;
      case 2: // Video.FULLSCREEN_UPDATE_PLAYER_DID_DISMISS
      case 3:
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.PORTRAIT
        ); // only on Android required
        break;
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.container}
        colors={["#ff0070", "#6fb7ff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <View style={styles.card}>
          <Video
            style={styles.video}
            source={video}
            resizeMode={ResizeMode.COVER}
            useNativeControls // Enable native controls
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            onFullscreenUpdate={onFullscreenUpdate}
          />
          <View style={styles.textContainer}>
            <ThemedText style={styles.title}>{title}</ThemedText>
            <ThemedText style={styles.subtitle}>{description}</ThemedText>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: "100%",
    width: "100%",
  },
  card: {
    marginTop: 20,
    width: "94%",
    minHeight: 200, // Use minHeight instead of a fixed height
    backgroundColor: '#fff',
    borderRadius: 11,
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
    paddingBottom: 20, // Add padding at the bottom for better spacing
  },
  video: {
    borderWidth: 4,
    borderRadius: 20,
    borderColor: 'white',
    width: "100%", // Set width to fill the card
    height: 200, // Set a fixed height for the video, adjust as needed
  },
  textContainer: {
    marginTop: 1,
    width: '101%',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  title: {
    alignItems: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 41,
    fontWeight: 'bold',
    color: '#001',
    marginBottom: 11,
    marginTop: 31,
    paddingTop: 16,
    lineHeight: 50, // Adjust line height as needed
  },
  subtitle: {
    textAlign: 'center',
    marginTop: 31,
    marginBottom: 21,
    fontSize: 21,
    fontWeight: 'bold',
    color: '#001',
  },
});
