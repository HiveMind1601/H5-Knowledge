import React,{Component} from 'react';
import {Text, View, Dimensions,FlatList} from 'react-native';
import {getPageFlatData} from '../serveices/FlatData';
import {
    Card,
    CardItem,
    Thumbnail,
    Left,
    Body
} from 'native-base';
import { Actions } from 'react-native-router-flux';

const FlatListItem = props =>{
    //console.log(props.index)
    const{item,index}=props
    return(
        <Card style={{ flex: 0}}>
            <CardItem>
                <Left>
                    <Thumbnail source={{uri: item.avatar}}/>
                    <Body>
                        <Text onPress={()=>{Actions.details({
                            id:index
                        })}}>店名：{item.name}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem>
                <Body>
                    <Text numberOfLines={3}>
                       店家简介： {item.text}
                    </Text>
                </Body>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>
                        地址：{item.address}
                    </Text>
                </Body>
            </CardItem>
            <CardItem>
                <Left>
                    <Text>销量：{item.number}</Text>
                </Left>
            </CardItem>
        </Card>
    )
}


export default class List extends Component{
    constructor(props){
        super(props)
        this.state={
            Data:[],
            page:1,
            loading: false,
            isloadMore: false
        }
    }
    getData(){
        this.setState({loading: true, isloadMore: true})
        setTimeout(()=>{
            getPageFlatData({page:this.state.page}).then(res=>{
                this.setState({
                    Data:[...this.state.Data,...res],                
                    loading: false,
                    isloadMore: false
                })
            })
        },1000)
        //console.log(this.state.Data)
    }
    componentDidMount(){
        this.getData()
    }
    lodashMore=()=>{
        this.setState(prevState=>{
            return{
                page:prevState.page+1
            }
        },()=>{
            this.getData()
        })
    }
    render(){
        //console.log(this.state.Data)
        return(
            <View>
                <FlatList
                data={this.state.Data}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({item,index}) => {
                    return <FlatListItem item={item} index={index}/>   
                }}
                onEndReached={this.lodashMore}
                onEndReachedThreshold={0.2}
                />
            </View>
        )
    }
}