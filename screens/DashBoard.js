import { View, Text, Image, TouchableOpacity, FlatList,ScrollView, StyleSheet,BackHandler, LogBox,Alert } from 'react-native'
import React from 'react'
import LessThan from '../constants/images/LessThan.png'
import Locations from '../constants/images/Location.png'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState,useEffect } from 'react'
import { Modal } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { withDecay } from 'react-native-reanimated'
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage'


const DashBoard = ({navigation}) => {


  const [pimg,setPimg] = useState();
  const [dimg,setdimg] = useState(false);

  const [dloc,setDloc] = useState(false);
  const [dcity,setDcity] = useState(false);
  const dlocc = 'to Spark';
  const dcityy = 'Welcome';

  const getImageuri = async () => {
        
    const value = await AsyncStorage.getItem('imageuri');
    if (value !== null) {
      // We have data!!
      setPimg(value)
      setdimg(true);
  }
}
getImageuri();

  const[eid,setEid] = useState();

  const getId = async () => {
        
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      // We have data!!
      setEid(value)
  }
}
getId();

const [ename,setEname]=useState();

const getName=async()=>{
  const value=await AsyncStorage.getItem("ename")
  if (value !== null) {
    // We have data!!
    setEname(value)
}
}
getName();


  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [userlocation,setUserLocation] = useState();
  const [usercity,setUsercity] = useState();
  
  //======================Location------=========================================================================
  useEffect(() => {
      (async () => {
            
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }

          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
          //alert(`Latitude ${location.coords.latitude} Longitude ${location.coords.longitude}`)
          AsyncStorage.setItem('latiude',JSON.stringify(location.coords.latitude))
          AsyncStorage.setItem('longitude',JSON.stringify(location.coords.longitude))
          lat = location.coords.latitude;
          long = location.coords.longitude;
        })();
      
        async  function  GetCurrentLocation () {
          
          let { coords } = await Location.getCurrentPositionAsync();
      
          if (coords) {
            const { latitude, longitude } = coords;
            let response = await Location.reverseGeocodeAsync({
              latitude,
              longitude,
            });
      
            

            for (let item of response) {
              let address = `${item.name}, ${item.street}, ${item.postalCode}`;
              let city = `${item.city}`
              setUserLocation(address);
              //console.log(address)
              setUsercity(city);
              setDloc(true);
              setDcity(true);

            
            }
          }
        };

        GetCurrentLocation();
      },[]);
      

      let text = 'Waiting..';
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        text = JSON.stringify(location);
      }
//======================
    
      //=================================================================================================
  
const getCurrentDate=()=>{
 
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return date + '-' + month + '-' + year;
}


  
    const BaseUrl=`https://sparkredeem.com/SparkAttendance/SparkDialAPI/employeePunchInList.php?date=${getCurrentDate()}`;
    const[details,setDetails]=React.useState([])
  React.useEffect(()=>(
    fetch(`${BaseUrl}`)
    .then((response)=>response.json())
    .then((value)=>setDetails(value.Response.Result))
    .catch((error)=>console.log(error))
    
  ),[])
 
  useEffect(() => {
    const backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to exit?", [
            {
                text: "cancel",
                onPress: () => null,
                style: 'cancel'
            },

            { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
    };
    const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
    );
    return () => backHandler.remove();

}, []);

  return (
    <SafeAreaView style={{backgroundColor:'white',maxHeight:'100%'}}>
        <View style={{backgroundColor:'#ffd203',borderBottomLeftRadius:35,borderBottomRightRadius:35}}>
          <View style={{flexDirection:'row'}}>
            {/* <Image source={LessThan} style={{height:25,width:25}}/> */}
            <Image source={Locations} style={{height:20,width:20,marginLeft:35,tintColor:'#0f4c81',borderColor:'black'}}/>
            <View style={{flexDirection:'column'}}>
              <Text style={{marginLeft:5,color:'black',fontSize:15,fontWeight:'bold'}}>{dcity == false? `${dcityy}`:`${usercity}`}</Text>
              <Text style={{marginLeft:-12,color:'black',fontSize:12}}>{dloc == false?`${dlocc}`:`${userlocation}`}</Text>
            </View>
          </View>
          
          <View style={{flexDirection:'row',marginLeft:30,marginTop:20}}>
              <View style={{borderBottomWidth:1,borderColor:'#ffd203',height:55,width:55,borderRadius:25}}>
                <Image source={dimg == true? {uri: pimg}: require('../Images/profile.png') } style={{height:60,width:60,borderRadius:30,marginTop:-10,marginLeft:5}}/>
              </View>
              <View>
                <Text style={{marginLeft:15,color:'black',fontSize:15,fontWeight:'bold'}}>{`${ename}`}</Text>
                <Text style={{marginLeft:15,color:'black',fontSize:12}}>{`${eid}`}</Text>
              </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
              <View>
                <Text style={{color:'black',fontSize:12,fontWeight:'bold',marginTop:10,marginLeft:-20}}>Date:{getCurrentDate()}</Text>
              </View>
              <View style={{flexDirection:'column',marginTop:-10}}>
                <Text style={{color:'black',fontSize:15,fontWeight:'bold',textAlign:'center'}}>Punch</Text>
                  <View style={{flexDirection:'row',paddingBottom:10,marginTop:3}}>
                      <TouchableOpacity onPress={()=>navigation.navigate('Punchin')} style={{backgroundColor:"#0f4c81",borderRadius:3,marginHorizontal:10,width:40}}><Text style={{color:'white',textAlign:'center'}}>IN</Text></TouchableOpacity>
                      <TouchableOpacity style={{backgroundColor:"#0f4c81",borderRadius:3,width:40}}><Text  style={{color:'white',textAlign:'center'}}>OUT</Text></TouchableOpacity>
                  </View>
              </View>
             
          </View>
          
        </View>
      
       <SafeAreaView style={{height:hp('100%'),width:wp('100%'),alignItems:'center'}}>
              
                  <FlatList
                      // horizontal={false}
                      // columnWrapperStyle={{alignItems:'center',justifyContent:'space-around'}}
                      // vertical={false}
                      numColumns={3}
                      data={details}
                      renderItem={({item})=>{
                        return(     
                            <View 
                              style={{
                                  height:90,
                                  width:90,
                                  borderRadius:45,
                                  borderWidth:2,
                                  borderColor:'#ffd203',
                                  alignItems:'center',
                                  justifyContent:'center',
                                  marginVertical:10,
                                  marginHorizontal:10
                                   }}>
                              <Image 
                                  source={{uri:item.employee_daily_punch_image}} 
                                  style={{height:80,
                                  width:80,
                                  borderRadius:40,
                               }}/>
                            </View>
                              )
              }}/>     
             
       </SafeAreaView>
      
        
       
    </SafeAreaView>  
  )
}

export default DashBoard;
