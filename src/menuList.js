import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView  , FlatList , TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import Card from './card';

export default class MenuList extends React.Component {

    constructor() {
        super();
        this.state = { cooking: [] };
    }

    async componentDidMount() {
        let response = await fetch("https://mfu-eport.firebaseio.com/cooking.json");
        let data = await response.json();
        this.setState({ cooking: data });
    }

    convertTime(time) {
        if (time >= 60) {
            return (time / 60).toFixed(1) + ' hour';
        }else {
            return time+ ' minutes';
        }
    }

    renderList(cook) {
       // return this.state.cooking.map((cook, index) => {
           return (
               // <TouchableOpacity key={index} onPress={()=>Linking.openURL(cook.originalURL)}>
               // <Card key={index}>
               <TouchableOpacity onPress={()=>Linking.openURL(cook.originalURL)}>
               <Card>
                   <View style={{ height:200,}}>
                       <View style={{ flex: 1 }}>
                           <Image style={{ height: 200, width: null }} source={{ uri: cook.imageURL }} />
                       </View>
                       <View style={{ backgroundColor: "#fffc", flex: 1, justifyContent: "space-between" }}>
                           <Text>{cook.type}</Text>
                           <Text>{cook.name}</Text>
                           <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: "7%", marginRight: "7%" }}>
                               <View style={{ flexDirection: "row", alignItems: "center" }}>
                                   <FontAwesome name="clock-o" />
                                   <Text>{`${this.convertTime(cook.timers)}`} </Text>
                               </View>
                               <View style={{ flexDirection: "row", alignItems: "center" }}>
                                   <FontAwesome name="star" />
                                   <Text>{cook.level}</Text>
                               </View>
                               <View style={{ flexDirection: "row", alignItems: "center" }}>
                                   <FontAwesome name="user" />
                                   <Text>{cook.serves || 1} People</Text>
                               </View>
                           </View>
                       </View>
                   </View>
               </Card>
               </TouchableOpacity>
           );
       // });
   }

   render() {
       return (
           <ScrollView>
               {/* {this.renderList()} */}
               <FlatList
                   data={this.state.cooking}
                   renderItem={(item,index)=>this.renderList(item.item)}
                   keyExtractor={(item,index)=>index}
               />
           </ScrollView>
       );
   }
}


const styles = StyleSheet.create({

});
