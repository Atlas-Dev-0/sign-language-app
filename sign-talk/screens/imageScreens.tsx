import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { RouteProp, useRoute } from '@react-navigation/native';

// Define the type for the route params
type RootStackParamList = {
  'Sign Preview': { image: any; title: string; description: string }; // Use 'any' for image type
};

// Define the route type for Sign Preview screen
type SignPreviewRouteProp = RouteProp<RootStackParamList, 'Sign Preview'>;

export default function ImageScreens() {
  const route = useRoute<SignPreviewRouteProp>();
  const { image, title, description } = route.params; // Retrieve the image, title, and description from route params

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.card}>
        <Image source={image} style={styles.image} />
        <ThemedView style={styles.textContainer}>
          <ThemedText style={styles.title}>{title}</ThemedText>
          <ThemedText style={styles.subtitle}>Instructions:</ThemedText>
          <ThemedText style={styles.description}>{description}</ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView >
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDD67',
  },
  card: {
    width: '93%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderCurve: 'circular',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
  },
  image: {
    marginTop: 0,
    width: '100%',
    height: '50%',
  },
  textContainer: {
    marginTop: 0,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    marginTop: 30,
    paddingTop: 15, // Add padding to ensure it doesn’t touch the top
  },
  subtitle: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});
