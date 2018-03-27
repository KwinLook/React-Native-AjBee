import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screen/HomeScreen';
import DetailScreen from './screen/DetailScreen';

const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Detail: {
    screen: DetailScreen
  },
},
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}
