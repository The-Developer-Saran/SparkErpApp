import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const TabIcon = ({focused,icon}) => {
  return (
    <View style={{
        alignItems:'center',
        justifyContent:'center',
        height:80,
        width:50
    }}>
     <Image source={icon}
     resizeMode="contain"
     style={{width:35,height:35,tintColor:focused?"#ffd203":"black"}}/>
     {
        focused && (
            <View style={{
                position:'absolute',
                left:0,
                right:0,
                bottom:0,
                height:0,
                backgroundColor:"blue",
                borderTopLeftRadius:5,
                borderTopRightRadius:5,
            }}/>
            
              )
              // &&
              // (
              //   <Text style={{fontWeight:'bold',color:focused?'#ffd203':'transparent'}}></Text>
              // )
              }

    </View>
  );
};

export default TabIcon