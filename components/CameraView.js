import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';


export default class CameraView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.front,

      leftCheekPosition: {x:0, y:0},
      leftEyePosition: {x:0, y:0},
      noseBasePosition: {x:0, y:0},
      rightCheekPosition: {x:0, y:0},
      rightEyePosition: {x:0, y:0},
      rightMouthPosition: {x:0, y:0}
    };
    this.onFacesDetected = this.onFacesDetected.bind(this);
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  onFacesDetected(faces){
    if(faces.faces.length>0){
      let face = faces.faces[0];

      //check if bulk update is better
      if(face.hasOwnProperty("leftCheekPosition"))
        this.setState({leftCheekPosition:face.leftCheekPosition});
      if(face.hasOwnProperty("leftEyePosition"))
        this.setState({leftEyePosition:face.leftEyePosition});
      if(face.hasOwnProperty("noseBasePosition"))
        this.setState({noseBasePosition:face.noseBasePosition});
      if(face.hasOwnProperty("rightCheekPosition"))
        this.setState({rightCheekPosition:face.rightCheekPosition});
      if(face.hasOwnProperty("rightEyePosition"))
        this.setState({rightEyePosition:face.rightEyePosition});
      if(face.hasOwnProperty("rightMouthPosition"))
        this.setState({rightMouthPosition:face.rightMouthPosition});
    }
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


            <View style={{width:4, height:4, backgroundColor:'#F33', position:'absolute',
              top:this.state.leftCheekPosition.y,
              left:this.state.leftCheekPosition.x}}/>
            <View style={{width:4, height:4, backgroundColor:'#60D', position:'absolute',
              top:this.state.leftEyePosition.y,
              left:this.state.leftEyePosition.x}}/>
            <View style={{width:4, height:4, backgroundColor:'#999', position:'absolute',
              top:this.state.noseBasePosition.y,
              left:this.state.noseBasePosition.x}}/>
            <View style={{width:4, height:4, backgroundColor:'#EF0', position:'absolute',
              top:this.state.rightCheekPosition.y,
              left:this.state.rightCheekPosition.x}}/>
            <View style={{width:4, height:4, backgroundColor:'#0D5', position:'absolute',
              top:this.state.rightEyePosition.y,
              left:this.state.rightEyePosition.x}}/>
            <View style={{width:4, height:4, backgroundColor:'#33F', position:'absolute',
              top:this.state.rightMouthPosition.y,
              left:this.state.rightMouthPosition.x}}/>


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
