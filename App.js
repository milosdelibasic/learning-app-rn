import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Config from 'react-native-config';
import {gray50, gray900, grayDark} from './src/config/colors';

const App = () => {
  useEffect(() => {
    console.log('Environment running: ', Config.ENVIRONMENT);
  }, []);
  return (
    <View style={{backgroundColor: grayDark, flex: 1}}>
      <Text style={{color: gray50, fontSize: 40}}>Test :)</Text>
    </View>
  );
};

export default App;
