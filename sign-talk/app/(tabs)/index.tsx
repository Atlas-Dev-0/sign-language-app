import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import Categories from '../../screens/categories';
import Alphabets from '../../screens/alphabetsScreen';
import Numbers from '../../screens/numbersScreen';
import GreetingsAndPhrases from '../../screens/greetings_and_phrases';
import ImageScreens from '../../screens/imageScreens';
import { ThemedView } from '@/components/ThemedView';

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
      {/* Define your screens */}
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Alphabets" component={Alphabets} />
      <Stack.Screen name="Numbers" component={Numbers} />
      <Stack.Screen name="Greetings And Phrases" component={GreetingsAndPhrases} />
      <Stack.Screen name="Sign Preview" component={ImageScreens} />
    </Stack.Navigator>
  );
}

