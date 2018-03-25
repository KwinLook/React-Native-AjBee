import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.cardStyle}>
            {props.children}
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    cardStyle: {
        shadowColor: '#000',
        borderColor: '#ddd',
        borderRadius: 2,
        borderWidth: 1,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
    },
});
