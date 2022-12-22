import { View, Text , Image} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DashBoard from '../Screen/DashBoard' 
import {  transparent, white } from 'react-native-paper/lib/typescript/styles/colors';
import { TabIcon } from '../components';
import icons from '../constants/icons'
import AttendenceReport from '../Screen/AttendenceReport';
import Holidays from '../Screen/Holidays';
import Notifications from '../Screen/Notifications';
import LeaveRequest from '../Screen/LeaveRequest';



const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarShowLabel:false,
      tabBarStyle:{
        position:'relative',
        bottom:0,
        left:0,
        right:0,
        elevation:5,
        backgroundColor:"#0f4c81",
        height:60,
        // borderTopLeftRadius:20,
        // borderTopRightRadius:20,
        // borderRadius:30,
        
      },
      headerShown:false,

    }}
    initialRouteName="DashBoard1"
    >
      
        <Tab.Screen name='AttendenceReport' component={AttendenceReport}  options={{
          tabBarIcon:({focused})=>(
               <TabIcon focused={focused} icon={icons.attendencereports}/>
          ),
        }}/>
         
        <Tab.Screen name='Notifications' component={Notifications}  options={{
          tabBarIcon:({focused})=>(
            <TabIcon focused={focused} icon={icons.notifications}/>
          ),
        }}/>
         <Tab.Screen name='DashBoard1' component={DashBoard}  options={{
          tabBarIcon:({focused})=>(
            <View style={{height:70,width:70,backgroundColor:'white',borderRadius:35,marginTop:-30,alignItems:'center',justifyContent:'center'}}>
              <View style={{height:60,width:60,borderRadius:30, backgroundColor:'#0f4c81',alignItems:'center',justifyContent:'center'}}>
              {/* <TabIcon focused={focused} icon={icons.dashboard}/> */}
              <Image
                source={require('../constants/images/DashBoard.png')}
                resizeMode='contain'
                style={{height:45,width:45,tintColor:focused?'#ffd203':'black'}}
                
              />
              </View>
            </View>
            
          ),
        }}/>
       
        <Tab.Screen name='Holidays' component={Holidays}  options={{
          tabBarIcon:({focused})=>(
            <TabIcon focused={focused} icon={icons.holidays}/>
          ),
        }}/>
        <Tab.Screen name='LeaveRequest' component={LeaveRequest}
        options={{
          tabBarIcon:({focused})=>(
            <TabIcon focused={focused} icon={icons.LeaveRequest}/>
          ),
        }}
        />
       
    </Tab.Navigator>
  )
}

export default Tabs;