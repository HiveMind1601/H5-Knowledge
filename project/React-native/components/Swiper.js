import React, {Component} from 'react';
import {StyleSheet, Text, View, Image,Dimensions} from 'react-native';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: 300
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default class HomeSwipers extends Component {
    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={true} loop={true} autoplay={true}>
                <View style={styles.slide1}>
                    <Image source={require('../assets/1.jpg')} style={{width:Dimensions.get('window').width,height:'100%'}}/>
                </View>
                <View style={styles.slide2}>
                    <Image source={require('../assets/2.jpeg')} style={{width:Dimensions.get('window').width,height:'100%'}}/>
                </View>
                <View style={styles.slide3}>
                    <Image source={require('../assets/3.jpg')} style={{width:Dimensions.get('window').width,height:'100%'}}/>
                </View>
            </Swiper>
        );
    }
}
