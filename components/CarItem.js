import React,{Component} from 'react';
import {View , Image, Text, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

class CarItem extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{
                    backgroundColor:'transparent',
                    height:110,
                    flexDirection:'row',
                    borderColor:'grey',
                    borderWidth:2,
                    marginBottom:10,
                    width:'100%',
                    paddingTop:5
                }}>
                    <Image style={{
                        width:'25%',
                        height:'100%',
                        top:0
                    }}/>
                </View>
                <View style={{
                    width:'40%',
                    height:'100%',
                    paddingLeft:5,
                    flexDirection:'column'
                }}>
                    <Text style={{
                        fontSize:30,
                        color:'black',
                        paddingLeft:20
                    }}>
                    </Text>
                </View>

                <View style={{
                    flexDirection:'row',
                    paddingLeft:20
                }}>
                <Text style={{
                    fontSize:18,
                    color:'black'
                }}>

                </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {container :{

        flex:1,
        marginTop:20,
        
    },
    listText1:{
        
    },
    listText2:{
        flexDirection:'row',
        paddingLeft:20
    },
    listText3:{
        fontSize:18,
        color:'black'
    }

}
)