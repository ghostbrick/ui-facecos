import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CameraView from './components/CameraView';

var cameraW = 200;
var cameraH = 260;

export default class App extends React.Component {
  render() {
    return (
    //  <View>
        <CameraView style={styles.camera}/>
        //<Text>hrhr</Text>
      //</View>
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
  'camera':{
    alignSelf:'center',
    width:cameraW,
    height:cameraH,
    top:50,
    backgroundColor:'#E19'
  }
});
