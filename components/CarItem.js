
import React from 'react';
import {View,Image ,Text, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

class CarItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: 'transparent',
            height: 110,
            flexDirection: 'row',
            borderColor: 'grey',
            borderWidth: 2,
            marginBottom: 10,
            width: '100%',
            paddingTop: 5,
          }}
        >
          <Image
            style={{
              width: '25%',
              height: '100%',
              top: 0,
            }}
            source={{
              uri:
                'http://i1.daumcdn.net/thumb/P318x190/?fname=http://i1.daumcdn.net/cfile4/image/24710B3E1F972D37BD103C',
            }}
          />

          <View
            style={{
              width: '40%',
              height: '100%',
              paddingLeft: 5,
              flexDirection: 'column',
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: 'black',
                paddingLeft: 20,
              }}
            >
              Dog 비싸
            </Text>
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: 20,
              }}
            >
              <AntDesign
                name="like2"
                size={20}
                paddingBottom={20}
                color="black"
              />
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                }}
              >
                우리집 안방에 모셔놔줘
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              paddingLeft: 50,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: 'black',
              }}
            >
              100 억
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default CarItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});