import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import Categories from '../../screens/categories';
import Alphabets from '../../screens/alphabetsScreen';

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
      }}
    >
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Alphabets" component={Alphabets} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    backgroundColor: "#FFDD67", // Yellow background to match body-like color
    marginTop: 2,
  },
});
