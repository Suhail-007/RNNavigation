import { StyleSheet, FlatList, View } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { useLayoutEffect } from 'react';

const renderMealItem = itemData => {
  const { id, title, imageUrl, duration, complexity, affordability } = itemData.item;
  const mealItemProps = {
    id,
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
  };
  return <MealItem {...mealItemProps} />;
};

const MealsOverview = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(mealItem => mealItem.categoryIds.indexOf(catId) >= 0);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find(category => category.id === catId).title,
    });
  }, [catId, navigation]);

  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({});
