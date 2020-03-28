import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import CategoryItem from '../components/CategoryItem';

const Categories = ({navigation}) => {
  const [categories] = useState([
    {id: 1, name: 'Food', detail: 'Food is something you can eat'},
    {
      id: 2,
      name: 'Instrument',
      detail: 'An instrument is a thing help you to do with music',
    },
    {id: 3, name: 'Laptop', detail: 'Laptop is a computer with small size.'},
    {id: 4, name: 'Stove', detail: 'Something helps you cook.'},
    {
      id: 5,
      name: 'Television',
      detail: 'You of course know what a TV is, right?',
    },
    {id: 6, name: 'Hihihihaha', detail: 'Just laugh for fun xD.'},
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={categories}
        renderItem={({item}) => (
          <View style={styles.wrap}>
            <CategoryItem
              onPressItem={() => {
                navigation.navigate('Category', item);
              }}
              category={item}
            />
          </View>
        )}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={styles.scrollView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 16,
  },
  wrap: {
    flex: 1,
    paddingHorizontal: 8,
  },
});

export default Categories;
