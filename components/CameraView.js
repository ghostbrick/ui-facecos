import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

var leftCheekPosition = {x:0, y:0}
var leftEyePosition = {x:0, y:0}
var noseBasePosition = {x:0, y:0}
var rightCheekPosition = {x:0, y:0}
var rightEyePosition = {x:0, y:0}
var rightMouthPosition = {x:0, y:0}

export default class CameraView extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.front,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  onFacesDetected(faces){
    if(faces.faces.length>0)
      console.log(faces)
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View style={{backgroundColor:'#58D'}}></View>; //TODO
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>; //TODO
    } else {
      return (
        <View style={this.props.style}>
          <Camera style={{ flex: 1 }}
            type={this.state.type}
            onFacesDetected = {this.onFacesDetected}
            faceDetectionLandmarks = {Camera.Constants.FaceDetection.Classifications.all}
            >


            <View style={{width:4, height:4, backgroundColor:'#F33',
              top:leftCheekPosition.x, left:leftCheekPosition.y}}/>
            <View style={{width:4, height:4, backgroundColor:'#F33',
              top:leftEyePosition.x, left:leftEyePosition.y}}/>
            <View style={{width:4, height:4, backgroundColor:'#F33',
              top:noseBasePosition.x, left:noseBasePosition.y}}/>
            <View style={{width:4, height:4, backgroundColor:'#F33',
              top:rightCheekPosition.x, left:rightCheekPosition.y}}/>
            <View style={{width:4, height:4, backgroundColor:'#F33',
              top:rightEyePosition.x, left:rightEyePosition.y}}/>
            <View style={{width:4, height:4, backgroundColor:'#F33',
              top:rightMouthPosition.x, left:rightMouthPosition.y}}/>


            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              {/*<TouchableOpacity
                style={{
                  flex: 1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {}}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' ['}Snap{'] '}
                </Text>
              </TouchableOpacity>*/}
            </View>
          </Camera>
        </View>
      );
    }
  }
}
