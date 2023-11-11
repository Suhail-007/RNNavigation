import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from './screen/Categories';
import MealsOverview from './screen/MealsOverview';
import MealDetails from './screen/MealDetails';

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontLoaded] = useFonts({
    'MPLUS-light': require('./assets/fonts/MPLUS-Light.ttf'),
    'MPLUS-medium': require('./assets/fonts/MPLUS-Medium.ttf'),
    'MPLUS-bold': require('./assets/fonts/MPLUS-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) await SplashScreen.hideAsync();
  }, [fontLoaded]);

  if (!fontLoaded) return null;

  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer style={styles.root}>
        <View
          style={styles.root}
          onLayout={onLayoutRootView}>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#24180f',
              },
              headerTintColor: '#fff',
              contentStyle: {
                backgroundColor: '#3f2f25',
              },
            }}>
            <Stack.Screen
              name='MealsCategories'
              component={Categories}
              options={{
                title: 'Alls Categories',
              }}
            />
            <Stack.Screen
              name='MealsOverview'
              component={MealsOverview}
              // options={({ route, navigation }) => {
              //   const catId = route.params.categoryId;
              //   return {
              //     title: 'Meals in ' + catId,
              //   };
              // }}
            />
            <Stack.Screen
              name='MealDetails'
              component={MealDetails}
            />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
