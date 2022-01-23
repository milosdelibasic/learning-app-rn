import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Config from 'react-native-config';
import {gray50, gray900, grayDark} from './src/config/colors';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/navigation/RootNavigation';
import {Provider} from 'react-redux';
import RootSwitch from './src/navigation/RootSwitch';
import {configureStore} from '@reduxjs/toolkit';

// const {store} = configureStore();

const App = () => {
  useEffect(() => {
    console.log('Environment running: ', Config.ENVIRONMENT);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <View style={{flex: 1}}>
        {/* <Provider store={store}> */}
        <RootSwitch />
        {/* </Provider> */}
      </View>
    </NavigationContainer>
  );
};

export default App;
