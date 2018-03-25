import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.titleText}>{props.title}</Text>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        paddingTop: 25,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        height: 60
    },
    titleText: {
        fontSize: 20
    }
});

