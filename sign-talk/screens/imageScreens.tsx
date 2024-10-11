import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { RouteProp, useRoute } from '@react-navigation/native';

// Define the type for the route params
type RootStackParamList = {
  'Sign Preview': { image: string, title: string, description: string };
};

// Define the route type for Sign Preview screen
type SignPreviewRouteProp = RouteProp<RootStackParamList, 'Sign Preview'>;

export default function ImageScreens() {

  const route = useRoute<SignPreviewRouteProp>();
  const { image, title, description } = route.params; // Retrieve the image, title, and description from route params

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.card}>
        {/* Image at the top of the card */}
        <Image source={{ uri: image }} style={styles.image} />
        {/* Title and description below the image */}
        <ThemedView style={styles.textContainer}>
          <ThemedText style={styles.title}>{title}</ThemedText>
          <ThemedText style={styles.subtitle}>Intructions:</ThemedText>
          <ThemedText style={styles.description}>{description}</ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderColor: '#000',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDD67',
  },
  card: {
    width: '93%',
    backgroundColor: '#ffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    alignItems: 'center',
    padding: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  textContainer: {
    marginTop: 10,
    marginLeft: 10,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'none',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
    marginTop: 50,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});
