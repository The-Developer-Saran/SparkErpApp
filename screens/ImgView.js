import React, { useState } from "react";
import {AsyncStorage} from 'react-native';
import {Image,View,TouchableOpacity} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


export default function Ingview({navigation}){

    const [imageuri,setImageuri] = useState();

    const [profile,setProfile] = useState();
    const [sid,setSid] = useState();
    const [lat,setLat] = useState(null);
    const [longi,setLong] = useState();

   
    

   const getlat = async () => {
    const value = await AsyncStorage.getItem('latiude');
    if (value !== null) {
    // We have data!!
    setLat(JSON.parse(value))
        }
    }
    getlat();

    const getlong = async () => {
        const value = await AsyncStorage.getItem('longitude');
        if (value !== null) {
        // We have data!!
        setLong(JSON.parse(value))
            }
        }
        getlong();

   const getsid = async () => {
        const value = await AsyncStorage.getItem('token');
        if (value !== null) {
        // We have data!!
        setSid(value)
            }
        }
        getsid();

   const getImageuri = async () => {
         const value = await AsyncStorage.getItem('imageuri');
          if (value !== null) {
            // We have data!!
            setImageuri(value)
            }
        }
      getImageuri();

      const upload=async()=>{
         const getImage = async () => {
                const value1 = await AsyncStorage.getItem('profile');
                if (value1 !== null) {
                  // We have data!!
                  setProfile({profile: JSON.parse(value1)})
                }
          }
        getImage();
        


var dataa = new FormData();

 dataa.append('login_pic',{
    uri:imageuri,
    name:'24c817c5-a29d-4f77-baf4-38b6679d8c70.jpg',
    type:'image/jpg'
});

const BASE_URL = "https://sparkredeem.com/SparkAttendance/SparkDialAPI/";


await axios.post(`https://sparkredeem.com/SparkAttendance/SparkDialAPI/employeePunchIn.php?login_id=${sid}&login_lat=${lat}&login_long=${longi}&login_pic=`, dataa,{
    headers: { 'Content-Type': 'multipart/form-data' },
})
    .then(response =>{

        const Data = response?.data;

        if(Data?.Response.Success === "1"){
            
                alert(Data.Response.Message);
                navigation.navigate('DashBoard1')
            
        }
        else{
            alert(Data.Response.Message);
            navigation.navigate('DashBoard1')
        }
            

   })

}

      

    return(
        <>
        <View style={{backgroundColor:'black',height:'100%'}}>
        <Image source={{uri: imageuri}} style={{height:700,width:'100%',borderWidth:2,borderColor:'#fff'}}/>
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:30}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('DashBoard1')}><Image source={require('../Images/remove.png')} style={{height:50,width:50,tintColor:"#fff"}} /></TouchableOpacity>
                    <TouchableOpacity onPress={upload}><Image source={require('../Images/tick.png')} style={{height:50,width:50,tintColor:"#fff"}} /></TouchableOpacity>
            </View>
        
        </View>
  
        </>
    );
}