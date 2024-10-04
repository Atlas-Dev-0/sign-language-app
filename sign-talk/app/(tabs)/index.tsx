import { Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native'; // For navigation handling

// Importing PNG images of buttons
import AlphabetsButton from '@/assets/images/buttons/ALPHABETS_BUTTON.png';
import DaysButton from '@/assets/images/buttons/DAYS_BUTTON.png';
import GreetingsAndPhrasesButton from '@/assets/images/buttons/GREETINGS_AND_PHRASES_BUTTON.png';
import NumbersButton from '@/assets/images/buttons/NUMBERS_BUTTON.png';
import QuizButton from '@/assets/images/buttons/QUIZ_BUTTON.png';


export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ThemedView style={styles.FullScreenContainer}>
      <ThemedView style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ThemedText style={styles.navText}>Categories</ThemedText>
        </TouchableOpacity>
      </ThemedView>
      {/* Grid Layout */}
      <ThemedView style={styles.container}>
        <ThemedView style={styles.gridContainer}>
          <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('explore')}>
            <Image source={AlphabetsButton} style={styles.gridImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <Image source={GreetingsAndPhrasesButton} style={styles.gridImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <Image source={NumbersButton} style={styles.gridImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <Image source={DaysButton} style={styles.gridImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <Image source={QuizButton} style={styles.gridImage} />
          </TouchableOpacity>
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
    flex: 1,
    marginTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDD67', // Yellow background like the body
  },
  FullScreenContainer: {
    flex: 1, // Ensures the full view takes up the entire screen
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
    width: '90%', // Adjust the width of the grid container as needed
    backgroundColor: '#FFDD67', // Yellow background to match body-like color
  },
  gridItem: {
    width: 140, // Square size
    height: 140, // Square size
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10, // Spacing between the squares
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
