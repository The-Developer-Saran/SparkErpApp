import React, { useEffect, useState } from "react";
import {Button, SafeAreaView,View, Text, Image, StyleSheet, Platform, RecyclerViewBackedScrollView, TouchableOpacity} from 'react-native';
import { Camera } from "expo-camera";
import {AsyncStorage} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { ImageManipulator } from 'expo';
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';






export default function Punchin({navigation}){
   


    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [image, setImage]= useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [reren,setReren] = useState(false);

   
//=====================================camera============================================//
        
useEffect(()=>{
    (async () => {
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(cameraStatus.status === 'granted');
    })();
},[]);

const takePicture = async()=>{
    if (camera){
     
        const data=await camera.takePictureAsync()
        setImage(data.uri);
        //console.log(data.uri)

        AsyncStorage.setItem('imageuri',data.uri);
        AsyncStorage.setItem('profile',JSON.stringify(data));
        navigation.navigate('img')
    }
 if (hasCameraPermission === false){
    
   //return <Text>No camera Access</Text>
   setReren(true);
 }
 
}



 //================================API post=======================================//
    
//  const manipResult = await manipulateAsync(
//     image.uri,
//     [{resize:{
//         height: 640, 
//         width: 480
//       }}],
//     { compress: 1, format: SaveFormat.JPEG }
//   );
//   setImage(manipResult);
// //===================================================================================


// var dataa = new FormData();
// dataa.append('profile',{
//     uri:image.uri,
//     name:'e24edf15-90ce-452e-bc17-c3c033474311.jpg',
//     type:'image/jpg'
// });

// const url='http://sparky.sparkredeem.com/api/vendor/update-profilephoto/10';


// await axios.post('http://sparky.sparkredeem.com/api/vendor/update-profilephoto/10', dataa, {
//     headers: { 'Content-Type': 'multipart/form-data' },
// })
// .then(response =>{

//             const Data = response?.data;
    
//             if(Data?.status === "1"){
                
//                     alert(Data.info);
                
//             }
//             else{
//                 alert(`${Data.data}`);
//             }
                
    
//         })
    


   

//================================================================================================================//
    return(
        <>

        <SafeAreaView style={{flex:1,height:'100%',backgroundColor:'black'}}>
            <View style={styles.container}>
                <Camera ref={ref => setCamera(ref)}
                style={styles.fixedRatio}
                    type = {type}
                    ratio={'4:3'}
                />
            </View>

            {/* <Button 
                title="Flip Camera"
                onPress={()=>{
                    setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
                }}
            />

            <Button 
                title="Capture"
                onPress={() => takePicture()}
            /> */}
            <View style={{flexDirection:'row',justifyContent:'space-around',marginBottom:45}}>
            <TouchableOpacity onPress={() => navigation.navigate('DashBoard1')}><Image source={require('../Images/remove.png')} style={{height:50,width:50,tintColor:'#fff'}} /></TouchableOpacity>
            <TouchableOpacity onPress={() => takePicture()}><Image source={require('../Images/capture.png')} style={{height:70,width:70,tintColor:'#fff'}} /></TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                    setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
                }}><Image source={require('../Images/flip.png')} style={{height:50,width:50,tintColor:'#fff'}} /></TouchableOpacity>
            </View>
            
            
           
        </SafeAreaView>
        
        
        </>
    );

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
       borderWidth:4,borderColor:'#fff'
    },
    fixedRatio:{
        flex:1,
        aspectRatio:0.5
    }
})