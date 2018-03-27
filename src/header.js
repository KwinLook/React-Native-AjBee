import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

const Header = (props) => {
    return (
        <View style={styles.header}>
            {props.goBack &&
                <View style={styles.backIcon}>
                    <TouchableOpacity onPress={() => props.goBack()}>
                        <FontAwesome name="chevron-left" />
                    </TouchableOpacity>
                </View>
            }
            <View style={styles.title}>
                <Text style={styles.titleText}>{props.title}</Text>
            </View>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        paddingTop: 25,
       
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        height: 60
    },
    backIcon: {
        paddingTop: 25,
        alignItems: "center",
        flexDirection: 'row',
        height: 60
    },
    title: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    titleText: {
        fontSize: 20
    }
});

