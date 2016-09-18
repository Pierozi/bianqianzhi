import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Carousel from 'react-native-carousel';

const styles = StyleSheet.create({
    container: {
        width: 375,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
});

class bianqianzhi extends Component {
    render() {
        return (
            <Carousel animate={false} width={375}>
                <View style={styles.container}>
                    <Text>My First Card</Text>
                </View>
                <View style={styles.container}>
                    <Text>My Second Card</Text>
                </View>
                <View style={styles.container}>
                    <Text>My Third Card</Text>
                </View>
            </Carousel>
        )
    }
}

export default bianqianzhi