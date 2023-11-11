import { useNavigation } from '@react-navigation/native';
import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import MealDetails from './MealDetails';

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {
  const navigation = useNavigation();
  const onPressHandler = () => {
    navigation.navigate('MealDetails', {
      mealId: id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => pressed && styles.btnPressed}
        android_ripple={{ color: '#ccc' }}>
        <View style={styles.innerCont}>
          <View>
            <Image
              style={styles.image}
              source={{ uri: imageUrl }}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  innerCont: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 20,
  },
  btnPressed: {
    opacity: Platform.OS === 'android' ? 1 : 0.8,
  },
});
