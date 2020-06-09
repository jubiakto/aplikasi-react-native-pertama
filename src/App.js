import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingReactNativeComponent from './pages/StylingComponent';
import MateriFlexBox from './pages/FlexBox';
import PositionReactNative from './pages/Position';

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 6000);
  }, []);
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingReactNativeComponent /> */}
        {isShow && <MateriFlexBox />}
        {/* <PositionReactNative /> */}
      </ScrollView>
    </View>
  );
};

export default App;
