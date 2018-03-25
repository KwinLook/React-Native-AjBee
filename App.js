import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';




export default class App extends React.Component {
  render() {
    return (
       <RootStack/>
    );
  }
}

const RootStack = StackNavigator({
  Home: {
      screen :HomeScreen
  }
});
