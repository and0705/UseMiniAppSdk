import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
// import logo from '../assets/icon.png';

const CategoryItem = ({onPressItem, category}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPressItem}>
      <View style={styles.container}>
        <Text style={styles.title}>{category.name}</Text>
        <Image
          style={styles.categoryImage}
          source={require('../assets/icon.png')}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#FFf',
    elevation: 5,
    marginBottom: 10,
  },
  categoryImage: {
    width: 64,
    height: 64,
  },
  title: {
    textTransform: 'uppercase',
    marginBottom: 8,
    fontWeight: '700',
  },
});

export default CategoryItem;
