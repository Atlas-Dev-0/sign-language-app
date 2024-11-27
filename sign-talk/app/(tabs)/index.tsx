import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Categories from '../../screens/categories';
import Alphabets from '../../screens/alphabetsScreen';
import Numbers from '../../screens/numbersScreen';
import Days from '../../screens/daysScreen';
import GreetingsAndPhrases from '../../screens/greetings_and_phrases';
import Animals from '../../screens/animals';
import Quiz from '../../screens/quiz';
import PhysicalActivities from '../../screens/physicalActivities';
import PeopleScreen from '../../screens/peopleScreen';
import ColorsScreen from '../../screens/colorsScreen';
import ImageScreens from '../../screens/imageScreens';
import VideoScreens from '../../screens/videoScreens';
import { LinearGradient } from 'expo-linear-gradient';

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        header: ({ options }) => (

          <View style={styles.header}>
            {/* Back Button */}
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()} style={styles.backButton}>
              <Text style={styles.backIcon}>▶</Text>
              <Text style={styles.backText}>Categories</Text>
            </TouchableOpacity>
            {/* Current Screen Name */}
            {route.name !== 'Categories' && (
              <View style={styles.currentScreenContainer}>
                <Text style={styles.currentScreenText}>{route.name}</Text>
              </View>
            )}
          </View>
        ),
        headerShown: true,
      })}
    >
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Alphabets" component={Alphabets} />
      <Stack.Screen name="Numbers" component={Numbers} />
      <Stack.Screen name="Days" component={Days} />
      <Stack.Screen name="Greetings And Phrases" component={GreetingsAndPhrases} />
      <Stack.Screen name="Physical Activities" component={PhysicalActivities} />
      <Stack.Screen name="People" component={PeopleScreen} />
      <Stack.Screen name="Colors" component={ColorsScreen} />
      <Stack.Screen name="Animals" component={Animals} />
      <Stack.Screen name="Sign Preview" component={ImageScreens} />
      <Stack.Screen name="Sign Video" component={VideoScreens} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator >
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingTop: 25,
    paddingHorizontal: 10,
    backgroundColor: "#ff0070",
  },
  backButton: {
    shadowColor: '#001',
    shadowOpacity: 1.2,
    shadowRadius: 6,
    shadowOffset: { width: 1, height: 2 },
    elevation: 5,
    zIndex: 3, // Ensures it is above the currentScreenContainer
    backgroundColor: "#ffff",
    color: "black",
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 5,
    paddingRight: 25,
    paddingLeft: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 0,
    position: "relative",
  },
  backIcon: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
    transform: [{ rotate: '180deg' }], // Rotate to point left
  },
  backText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  currentScreenContainer: {
    zIndex: 2,
    flex: 1,
    backgroundColor: '#FFDD67',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 30,
    top: 0, // Adjust as necessary for placement
    left: -20, // Adjust as necessary for placement
  },
  currentScreenText: {
    fontSize: 15,
    textAlign: 'left',
    color: '#000',
    fontWeight: 'bold',
  },
});
