import React from 'react';
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
// import

//contet
const Header = (props) =>{

 return  (
 <View style={styles.header}>
 {props.goBack &&
 <View>
 <TouchableOpacity onPress={()=> props.goBack()}>
 <FontAwesome name="chevron-left"/>
 </TouchableOpacity>
 </View>
 }
 <View>
 <Text style={styles.titleText}>{props.title}</Text>
 </View>
 </View>
    )
}

export default Header;
//styleSheet
const styles = StyleSheet.create({
    header:{
      paddingTop:15,
      alignItems: 'center',
      backgroundColor:"#fff",
      height:60,
      shadowColor: '#000',
      shadowOffset: {width:0,height:2},
      shadowOpacity: 0.2,
      flexDirection: "row",
    },
    titleText:{
      fontSize:20,
    }
});
