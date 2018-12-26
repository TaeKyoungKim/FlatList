import React from 'react';
import { FlatList, View,StyleSheet } from 'react-native';
import CarItem from './components/CarItem';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isRefreshing: false,
      data : [
        {key: 'a', title: '테슬라'}, 
        {key: 'b', title:'현대'}
      ]
    }
  }
  render() {
    return (
      <View style={{flex:1, paddingTop:30}}>
        <FlatList
          data={this.state.data}
          renderItem={ ({item}) => <CarItem title={item.title}/>}
          ItemSeparatorComponent={ () => (
            <View style={{
              height: StyleSheet.hairlineWidth, 
              marginLeft:20, 
              backgroundColor:'red'
            }} />
          )}
          refreshing = {this.state.isRefreshing}
          onRefresh={ ()=>{
            this.setState({
              isRefreshing : true
            })
            setTimeout(() => {
              this.setState({
                isRefreshing: false,
                data : [
                  {key: 'a', title: '테슬라'}, 
                  {key: 'b', title:'현대'},
                  {key: 'c', title:'BMW'}
                ]
              })
            }, 5000);
          }}
        />
      </View>
    );
  }
}