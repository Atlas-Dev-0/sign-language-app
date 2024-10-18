import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import Categories from '../../screens/categories';
import Alphabets from '../../screens/alphabetsScreen';
import Numbers from '../../screens/numbersScreen';
import Days from '../../screens/daysScreen';
import GreetingsAndPhrases from '../../screens/greetings_and_phrases';
import Animals from '../../screens/animals';
import Quiz from '../../screens/quiz';
import PhysicalActivities from '../../screens/physicalActivities';
import ImageScreens from '../../screens/imageScreens';
import VideoScreens from '../../screens/videoScreens';

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFDD67', // Set the header background to yellow
        },
        headerTintColor: '#333', // Set the color of back button and title text
        headerTitleStyle: {
          fontWeight: 'bold', // Customize the title text style
        },
        contentStyle: {
          backgroundColor: '#FFDD67', // Default background for every screen
        },
      }}
    >
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Alphabets" component={Alphabets} />
      <Stack.Screen name="Numbers" component={Numbers} />
      <Stack.Screen name="Days" component={Days} />
      <Stack.Screen name="Greetings And Phrases" component={GreetingsAndPhrases} />
      <Stack.Screen name="Physical Activities" component={PhysicalActivities} />
      <Stack.Screen name="Animals" component={Animals} />
      <Stack.Screen name="Sign Preview" component={ImageScreens} />
      <Stack.Screen name="Sign Video" component={VideoScreens} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  );
}

