import * as React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { SafeAreaProvider} from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts } from 'expo-font';
import { 
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
// Import all the screens for Stack Navigator
import HomeScreen from './screens/HomeScreen';
import ListingType from './screens/ListingType';
import ListingsScreen from './screens/ListingsScreen';
import ListingDetailScreen from './screens/ListingDetailScreen';

const App = () => {

  const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });
  return (
   <SafeAreaProvider>
     {/* Initializing Navigation with 4 screens */}
      <NavigationContainer>
        {/* First page will be set as HomeScreen */}
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitleStyle:{
              fontWeight: 'normal',
              fontFamily: 'Inter_400Regular'
            }
          }}>
            <Stack.Screen 
              name='Home'
              component={HomeScreen}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name='ListingType'
              component={ListingType}
              options={{
                headerShown: false,
                cardStyle: {
                  backgroundColor: '#000',
                }
              }}
              
            />
            <Stack.Screen
              name='ListingsScreen'
              component={ListingsScreen}
              options={{
                title: 'House Listings'
              }}
            />
            <Stack.Screen
              name='ListingDetailScreen'
              component={ListingDetailScreen}
              options={{
                title: 'Listing Info'
              }}
            />
          </Stack.Navigator>
     </NavigationContainer>
   </SafeAreaProvider>
  );
}
export default App