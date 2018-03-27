import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CameraView from './components/CameraView';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor:'#E19'}}>
        <CameraView style={styles.camera} />
        <Text>hrhr</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera:{
    width:100,
    height:100,
    backgroundColor:'#E19'
  }
});
