import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {Router, Stack, Scene, Tabs} from 'react-native-router-flux';
import { Root } from "native-base";
import { AppLoading } from 'expo';
import {
    Home,
    Details,
    Discover,
    Cart,
    My,
    TabIcon
} from './components';
export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          loading: true
      }
    }

    async componentWillMount(){
      await Expo.Font.loadAsync({
          'Roboto':require('./Fonts/Roboto.ttf'),
          'Roboto_medium':require('./Fonts/Roboto_medium.ttf'),
          'Arail':require('./Fonts/Arial.ttf')
      })
      this.setState({
          loading:false
      })
    }
    render() {
      if(this.state.loading){
        return(
          <Root>
            <AppLoading/>
          </Root>
        )
      }

      return (
          <Router>
              <Tabs>
                  <Stack key="root" title="首页" icon={TabIcon} IconName="home">
                      <Scene key="details" component={Details} title="产品详情"/>
                      <Scene key="home" component={Home} title="首页" initial/>
                  </Stack>
                  <Stack key="Discover" title="发现" icon={TabIcon} IconName="cog">
                      <Scene key="discover" component={Discover} title="发现美食"/>
                  </Stack>
                  <Stack key="Cart" title="购物车" icon={TabIcon} IconName="shopping-cart">
                      <Scene key="cart" component={Cart} title="购物车"/>
                  </Stack>
                  <Stack key="My" title="我的" icon={TabIcon} IconName="users">
                      <Scene key="my" component={My} title="我的"/>
                  </Stack>
              </Tabs>

          </Router>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
