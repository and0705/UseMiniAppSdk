import React from 'react';
import {Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import miniAppSDK from 'mini-app-sdk';

const MiniAppList = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => miniAppSDK.openMenu()}>
      <Text style={styles.text}>Play Games</Text>
      <Image source={require('../../../assets/images/game.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderTopWidth: 1,
  },
  text: {
    paddingTop: 2,
  },
});

export default MiniAppList;
