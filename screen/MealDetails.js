import { Image, StyleSheet, Text, View } from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealDetailsInfo from './../components/MealDetails';

const MealDetails = ({ route }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <MealDetailsInfo
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />

      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}

      <Text>Steps</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({});
