import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Category = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.detail}>{route.params.detail}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
  },
  detail: {
    paddingTop: 30,
    paddingBottom: 20,
    textTransform: 'uppercase',
    marginBottom: 8,
    fontWeight: '700',
  },
  button: {
    marginBottom: 100,
  },
  scrollView: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default Category;
