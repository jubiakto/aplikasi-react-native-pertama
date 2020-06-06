import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import lenovo from './lenovo.jpg';

const StylingReactNativeComponent = () => {
    return (
      <View>
        <Text style={styles.text}>Ini Styling Component</Text>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: '#ff9f43',
            borderWidth: 2,
            borderColor: '#f368e0',
            marginTop: 20,
            marginLeft:20,
            marginBottom:20
          }}
        />
        <View style={{padding:12, backgroundColor: '#F2F2F2', width: 250, borderRadius: 10}}>
          <Image source={lenovo} style={{width:220, height:150, borderRadius: 10}} />
          <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 16}}>Lenovo G340 AMD RYZEN7</Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#ff9f43', marginTop: 12 }}>Rp. 25.000.000</Text>
          <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12 }}>Tambun Selatan</Text>
          <View style={{backgroundColor: '#1dd1a1', borderRadius: 25, paddingVertical: 6, marginTop: 20}}>
            <Text style={{fontSize: 14, fontWeight: '600', color: 'white', textAlign: 'center'}}>BELI</Text>
          </View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    text: {
      fontSize: 18,
      fontStyle: 'italic',
      fontWeight: 'bold',
      color: '#01a3a4',
      marginLeft: 20,
      marginTop: 40
    }
  });

  export default StylingReactNativeComponent;