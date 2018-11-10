import React,{Component} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import {Button} from "native-base";
import {Actions} from 'react-native-router-flux';
import {getAllFlatData} from '../serveices/FlatData';
export default class Details extends Component{
    getIdData(){
        
    }
    render(){
        console.log(this.props.id)
        return(
            <View>
                <Text>Details</Text>
            </View>
        )
    }
}