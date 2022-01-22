import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Config from 'react-native-config';

const App = () => {
  useEffect(() => {
    console.log('Environment running: ', Config.ENVIRONMENT);
  }, []);
  return (
    <View>
      <Text>Test :)</Text>
    </View>
  );
};

export default App;
