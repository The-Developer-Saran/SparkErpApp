import { View, Text,SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Card } from 'react-native-paper'

const LeaveRequest = () => {
  return (
    <SafeAreaView style={{width:wp('100%'),height:hp('100%'),alignItems:'center',backgroundColor:'white'}}>
         <View style={{width:wp('100%'),height:hp('5%'),backgroundColor:'#ffd203',alignItems:'center',justifyContent:'center'}}>
          <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>Leave Request</Text>
         </View>
          <Card style={{ width:wp('80%'),height:hp('20%'),borderRadius:10,marginTop:40,backgroundColor:'white'}}>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <View  style={{width:wp('5%'),height:hp('2.5%'),backgroundColor:'#ffd203',borderBottomRightRadius:30,borderTopLeftRadius:5}}></View>
                  <View style={{width:wp('5%'),height:hp('2.5%'),backgroundColor:'#ffd203',borderBottomLeftRadius:30,borderTopRightRadius:5}}></View>
              </View>

          </Card>
    </SafeAreaView>
  )
}

export default LeaveRequest;
