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

export default class bianqianzhi extends Component {
    render() {
        return (
            <Carousel animate={false} width={375}>
                <View style={styles.container}>
                    <Text>Flash Card　一</Text>
                </View>
                <View style={styles.container}>
                    <Text>Flash Card 二</Text>
                </View>
                <View style={styles.container}>
                    <Text>Flash Card 三</Text>
                </View>
            </Carousel>
        )
    }
}