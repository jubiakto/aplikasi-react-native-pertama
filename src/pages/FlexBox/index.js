import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

class FlexBox extends Component {
  constructor(props) {
    super(props);
    console.log('==> constructor');
    this.state = {
      subscriber: 100,
    };
  }

  componentDidMount() {
    console.log('==> component did mount');
    setTimeout(() => {
      this.setState({
        subscriber: 900,
      }); 
    }, 2000);
  }

  componentDidUpdate() {
    console.log('==> component did update');
  }

  componentWillUnmount() {
    console.log('==> component will unmount');
  }

  render() {
    console.log('==> render');
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#c8e6d5',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}>
          {/* <Text>Materi Flex Box</Text> */}
          {/* <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
                    <View style={{backgroundColor: '#feca57', flex: 1, height: 100}} />
                    <View style={{backgroundColor: '#1dd1a1', flex: 2, height: 150}} />
                    <View style={{backgroundColor: '#5f27cd', flex: 3, height: 200}} /> */}

          <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
          <View style={{backgroundColor: '#feca57', width: 50, height: 100}} />
          <View style={{backgroundColor: '#1dd1a1', width: 50, height: 150}} />
          <View style={{backgroundColor: '#5f27cd', width: 50, height: 200}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#01a3a4',
            justifyContent: 'space-around',
          }}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Image
            source={{uri: 'http://placeimg.com/100/100/tech'}}
            style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Brian Jubiakto Murthyady
            </Text>
            <Text>{this.state.subscriber} Jt Subscriber</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FlexBox;
