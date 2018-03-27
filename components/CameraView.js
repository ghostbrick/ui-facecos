import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraView extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.front,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View style={{backgroundColor:'#58D'}}></View>; //TODO
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>; //TODO
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
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
