import React, { useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Punchin from "./Screen/Punchin";
import Ingview from "./Screen/ImgView";
import { Login } from "./Screen/Login";
import Tabs from "./navigation/Tabs";
import AttendenceReport from "./Screen/AttendenceReport";
import Notifications from "./Screen/Notifications";
import Holidays from "./Screen/Holidays";
import LeaveRequest from "./Screen/LeaveRequest";
import SplashScreen from 'react-native-splash-screen'
 



const Stack = createNativeStackNavigator();
function App(){

  useEffect(()=>{
    SplashScreen.hide();
  })
  

  return(
    <>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="DashBoard1" component={Tabs}/>
      
        <Stack.Screen name="AttendenceReport" component={AttendenceReport}/>
        <Stack.Screen name="Notifications" component={Notifications}/>
        <Stack.Screen name="Holidays" component={Holidays}/>
        <Stack.Screen name="LeaveRequest" component={LeaveRequest}/>
         <Stack.Screen name="Punchin" component={Punchin} />
        <Stack.Screen name="img" component={Ingview} />
        
       
      </Stack.Navigator>
    </NavigationContainer>
    

    </>
  );
}
export default App;