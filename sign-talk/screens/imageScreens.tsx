import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { RouteProp, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

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
    <View style={styles.container}>
      <LinearGradient
        style={styles.bgcontainer}
        colors={["#ff0070", "#6fb7ff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <View style={styles.card}>
          <Image source={image} style={styles.image} />
          <View style={styles.textContainer}>
            <ThemedText style={styles.title}>{title}</ThemedText>
            <ThemedText style={styles.subtitle}>{description}</ThemedText>
          </View>
        </View>
      </LinearGradient>
    </View >
  );
}

const styles = StyleSheet.create({
  bgcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: "100%",
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%",
  },
  card: {
    marginTop: 20,
    width: '93%',
    height: 500, // Use minHeight instead of a fixed height
    minHeight: 200, // Use minHeight instead of a fixed height
    backgroundColor: '#fff',
    borderRadius: 11,
    borderCurve: 'circular',
    shadowColor: '#001',
    shadowOpacity: 1.2,
    shadowRadius: 6,
    shadowOffset: { width: 1, height: 2 },
    elevation: 5, // For Android shadow effect
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 20, // Add padding to the bottom for better spacing
  },
  image: {
    borderWidth: 4,
    borderRadius: 20,
    borderColor: 'white',
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
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
