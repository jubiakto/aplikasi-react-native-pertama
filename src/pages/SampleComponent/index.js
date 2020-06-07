import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';


const SampleComponent = () => {
    return (
      <View>
        <View style={{width: 80, height: 100, backgroundColor: '#ff6b6b'}} />
        <Text>Brian</Text>
        <Jubiakto />
        <Text>Lilik</Text>
        <Text>Airinzia</Text>
        <Photo />
        <TextInput style={{borderWidth: 1}} />
        <BoxGreen />
        <Profile />
      </View>
    );
  };
  
  //Fungsional Component
  const Jubiakto = () => {
    return <Text>Jubiakto Murthyady</Text>;
  };
  
  const Photo = () => {
    return (
      <Image 
        source={{uri: 'http://placeimg.com/100/100/tech'}}
        style={{width: 150, height:100}}
      />
    );
  };
  
  //Class Component
  class BoxGreen extends Component {
    render(){
      return <Text>Ini Component dari class</Text>;
    }
  };
  
  class Profile extends Component {
    render(){
      return (
        <View>
          <Image
            source={{uri: 'http://placeimg.com/100/100/tech'}}
            style={{width: 200, height:200, borderRadius: 100}}
          />
          <Text style={{color: 'blue', fontSize: 20}}>Ini Handphone</Text>
        </View>
      );
    }
  };

  export default SampleComponent;