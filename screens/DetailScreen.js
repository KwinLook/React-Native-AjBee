import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../src/header';
import MenuList from '../src/menuList';


export default class DetailScreen extends React.Component {
  static navigationOptions ={
    header:null
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Header title={'Detail'} /> 
      </View>
    );
  }
}
