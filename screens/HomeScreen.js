import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../src/header';
import MenuList from '../src/menuList';


export default class HomeScreen extends React.Component {
  static navigationOptions ={
    header:null
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Header title={'FAVORITE'} />
        <MenuList />
      </View>
    );
  }
}
