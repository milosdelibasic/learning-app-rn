import * as React from 'react';

import {rootSwitch} from '../config/navigator';
import MainStack from './MainStack';
import {noHeader} from '../config/navigationOptions';
import {createStackNavigator} from '@react-navigation/stack';
// import {useDispatch} from 'react-redux';

const Stack = createStackNavigator();

const RootSwitch = ({}) => {
  // const dispatch = useDispatch();

  return (
    <Stack.Navigator screenOptions={noHeader}>
      <Stack.Screen
        screenOptions={{headerShown: false, animationEnabled: false}}
        name={rootSwitch.main}
        component={MainStack}
      />
    </Stack.Navigator>
  );
};

export default RootSwitch;
