import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Button, Header,Item,Input,Container} from "native-base";
import {Actions} from 'react-native-router-flux';
import { HomeSwiper,List } from '../components';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Home extends Component {
    render() {
        return (
            <Container>
                <View style={{height:55}}>
                    <Container>
                        <Header searchBar rounded>
                        <Item>
                            <Icon name="search" />
                            <Input placeholder="Search" />
                            <Icon name="search" />
                        </Item>
                        <Button transparent>
                            <Text>Search</Text>
                        </Button>
                        </Header>
                    </Container>
                </View>
                <View style={{height:200}}>
                    <HomeSwiper/>
                </View>
                <View style={{ flexDirection: 'row',justifyContent:'space-around',paddingTop:10,height:100}}>
                    <View style={styles.flex}>
                        <Icon name="home" style={{fontSize:30,color:'blue'}}></Icon>
                        <Text style={styles.text}>美食</Text>
                    </View>
                    <View style={styles.flex}>
                        <Icon name="building" style={{fontSize:30,color:'pink'}}></Icon>
                        <Text style={styles.text}>酒店</Text>
                    </View>
                    <View style={styles.flex}>
                        <Icon name="building" style={{fontSize:30,color:'orange'}}></Icon>
                        <Text style={styles.text}>旅游</Text>
                    </View>
                    <View style={styles.flex}>
                        <Icon name="home" style={{fontSize:30,color:'yellow'}}></Icon>
                        <Text style={styles.text}>超市</Text>
                    </View>
                    <View style={styles.flex}>
                        <Icon name="building" style={{fontSize:30,color:'green'}}></Icon>
                        <Text style={styles.text}>景点</Text>
                    </View>
                </View>
                <View>
                    <List/>
                </View>
            </Container>
        )
    }
}

const styles=StyleSheet.create({
    flex:{
        width: '20%', 
        height: 70,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',

    },
    text:{
        color:'#000',
        fontSize: 15,
        fontWeight: 'bold'
    }
})

