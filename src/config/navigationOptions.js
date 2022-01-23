import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import {padding} from '../config/spacing';
import Text from '../components/text';
import * as RootNavigation from '../navigation/RootNavigation';
import {mainStack, profileStack} from './navigator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {hitBox20} from '../config/helpers';
import {gray500, gray800, gray900} from './colors';

const {width, height} = Dimensions.get('screen');

export const mainOptions = {
  headerShown: true,
  headerStyle: {
    backgroundColor: gray900,
    height: height / 12,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerShadowVisible: false,
  headerTitle: () => (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {/* <Logo width={width / 3} height={height / 18} /> */}
    </View>
  ),
  headerLeft: () => (
    <TouchableOpacity
      hitSlop={hitBox20}
      onPress={() => RootNavigation.navigate(mainStack.profile)}>
      <Icon name="menu" size={30} color={gray900} />
    </TouchableOpacity>
  ),
  headerRight: () => <View></View>,
  headerLeftContainerStyle: {
    paddingLeft: padding.big,
    flex: 1,
  },
  headerRightContainerStyle: {
    paddingRight: padding.big,
    flex: 1,
  },
  headerTitleContainerStyle: {
    flex: 2,
    alignItems: 'center',
  },
};

export const tab = {
  tabBarStyle: {
    height: height / 15,
    paddingBottom: 10,
    backgroundColor: gray800,
    borderTopColor: gray800,
  },
  tabBarLabelPosition: 'below-icon',
  tabBarLabelStyle: {
    backgroundColor: gray800,
  },
  tabBarActiveTintColor: gray900,
  tabBarInactiveTintColor: gray800,
  tabBarLabelStyle: {
    backgroundColor: 'transparent',
  },
  tabBarButton: props => (
    <Pressable
      android_ripple={{
        color: gray500,
        borderless: true,
        radius: width / 4.5,
      }}
      {...props}
    />
  ),
};

export const noHeader = {
  headerShown: false,
};
