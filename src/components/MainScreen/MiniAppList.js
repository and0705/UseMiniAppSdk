import React, {useState, useEffect} from 'react';
import {Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import m from 'mini-app-sdk';
// import {MINI_GAME_ID} from './../../../constants/MiniAppId';

const MiniAppList = () => {
  // const [checkingMiniApp, setCheckingMiniApp] = useState(false);

  // useEffect(() => {

  //   if (!m.isInstalled(MINI_GAME_ID)) {
  //     m.install(MINI_GAME_ID).then(() => {setCheckingMiniApp(true)});
  //   } else {
  //     let newUpdate;
  //     m.checkUpdate(MINI_GAME_ID).then(res => {
  //       newUpdate = res;
  //     });

  //     if (newUpdate) {
  //       m.install(MINI_GAME_ID).then(() => {});
  //     }
  //     setCheckingMiniApp(true);
  //   }
  //   }, []);

  // const startMini = () => {
  //   console.log('isInstalled: ' + m.isInstalled(MINI_GAME_ID));
  //   m.start({
  //     id: MINI_GAME_ID,
  //     onSuccess: res => console.log('threadId: ' + res),
  //   }).then(() => {});
  // };

  return (
    // <TouchableOpacity style={styles.containerr} onPress={startMini}>
    <TouchableOpacity style={styles.container} onPress={() => m.openMenu()}>
      <Text style={styles.text}>Play games</Text>
      <Image
        style={styles.image}
        source={require('../../../assets/images/game.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    paddingTop: 2,
  },
  image: {
    height: 200,
    width: null,
  },
});

export default MiniAppList;
