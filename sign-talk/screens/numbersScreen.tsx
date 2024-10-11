import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NumbersScreen() {
  // Generate numbers 1 to 10
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <ThemedView style={styles.FullScreenContainer}>
      {/* Grid Layout for Numbers*/}
      <ThemedView style={styles.container}>
        <ThemedView style={styles.gridContainer}>
          {numbers.map((number) => (
            <TouchableOpacity key={number} style={styles.gridItem}>
              <ThemedText style={styles.navText}>{number}</ThemedText>
            </TouchableOpacity>
          ))}
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 55,
    marginBottom: 5,
    backgroundColor: '#FFDD67', // Adjust to match your design
  },
  container: {
    marginTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDD67', // Yellow background like the body
  },
  FullScreenContainer: {
    backgroundColor: '#FFDD67', // Yellow background to match body-like color
  },
  backButton: {
    marginRight: 10,
    marginLeft: 10,
  },
  backButtonText: {
    fontSize: 22,
    color: '#333', // Adjust for contrast
  },
  navText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333', // Adjust for contrast
  },
  logo: {
    width: 290,
    height: 290,
    resizeMode: 'contain',
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333', // Dark text color
    marginTop: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Adjust the width of the grid container as needed
    backgroundColor: '#FFDD67', // Yellow background to match body-like color
  },
  gridItem: {
    width: 120, // Increase the size of each grid item for larger boxes
    height: 120, // Increase the size of each grid item for larger boxes
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    margin: 15, // Spacing between the squares
    borderRadius: 10, // Optional for rounded corners
  },
  gridText: {
    fontSize: 18,
    color: '#333', // Adjust text color for contrast
  },
  gridImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Adjust the image to fit inside the grid item
  },
});
