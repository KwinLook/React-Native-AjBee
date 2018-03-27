import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../src/header';

export default class DetailScreen extends React.Component {
 constructor(){
 super();
 this.goBack = this.goBack.bind(this);
    }
 static navigationOptions = {
        header:null
    }
    renderIngredient(){
 return this.props.navigation.state.params.cook.ingredients.map((ing,index)=>{
 return <Text>{`${ing.quantity} ${ing.name}`}</Text>
        });

    }
    goBack(){
 this.props.navigation.goBack();
    }
    render() {
 return (
 <View style={{flex:1}}>

 <Header title={'Detail'} goBack={this.goBack}/>
 {this.renderIngredient()}
 </View>
      );
    }
  }
