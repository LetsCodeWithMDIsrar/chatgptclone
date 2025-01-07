import { View, Text, StyleSheet, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import MainStructure from './src/components/main-structure';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  useEffect(()=>{
    StatusBar.setBarStyle('dark-content');
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setTranslucent(true);
  }, []);
  return (
    <GestureHandlerRootView style={styles.rootView}>
      <MainStructure/>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  rootView:{
    flex:1,
  },
});

export default App;

