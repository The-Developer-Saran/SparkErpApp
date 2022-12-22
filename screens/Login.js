import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Image, Alert, BackHandler, LogBox } from 'react-native';
import Lottie from 'lottie-react-native';
import axios from 'axios';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { Keyboard } from 'react-native';


Keyboard.dismiss()
LogBox.ignoreAllLogs();


export function Login({ navigation }) {
    

    const isFocused = useIsFocused();

    useEffect(() => {
        // Put Your Code Here Which You Want To Refresh or Reload on Coming Back to This Screen.
    }, [isFocused]);

    const navigateToNextScreen = () => {

        navigation.navigate('Login');

    }


    const [Id, setId] = useState();
    const [pass, setPin] = useState();
    const [token, settoken] = useState(null)


    const validatee = async () => {
        await AsyncStorage.setItem('token', Id)

        const BASE_URL = "https://sparkredeem.com/SparkAttendance/SparkDialAPI/";

        axios.get(`${BASE_URL}employeeLogin.php?login_id=${Id}&login_pin=${pass}`)
            .then(response => {
                const data = response?.data;

                if (data?.Response.Success === '1') {
                   // alert(`Login Success ${data?.Response.Result[0].employee_name}`);
                    AsyncStorage.setItem('ename',data?.Response.Result[0].employee_name)
                   navigation.push('DashBoard1',{screen: 'DashBoard1'});
                   
                }


                else {
                    alert("Invalid Credentials");
                    AsyncStorage.removeItem('token');
                   
                }
            })
            .catch(error => {
                alert('Please check your internet connection');
            });


    }


    const tokenLogin = async () => {
        const value = await AsyncStorage.getItem('token')

        if (value !== null) {
            navigation.navigate('DashBoard1')
            console.log('connected')


        } else {
            console.log('yet to connect')
            

        }

    }

    tokenLogin()


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
        <KeyboardAvoidingWrapper>
            <>
                <View style={{ width: wp(100), height: hp(100) }}>
                    <View style={{ width: wp(100), height: hp(50), justifyContent: 'center' }}>
                        <View style={{ alignItems: 'center', marginTop: 50 }}>
                            <Image source={require('../Images/spark.png')} style={{ width: 150, height: 50 }} />
                        </View>


                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Lottie style={{ height: 250 }} source={require('../Images/image.json')} autoPlay loop />
                        </View>

                    </View>



                    <View style={{ width: wp(100), height: hp(50), backgroundColor: '#ffd203', borderTopEndRadius: 200, alignItems: 'center' }}>


                        <View style={styles.container}>
                            <View style={{}}>
                                <Text style={{ fontSize: 15 }}>Welcome to SparkDial</Text>
                            </View>


                            <View style={{ alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row' }}>

                                    <View style={{ backgroundColor: '#0f4c81', width: 48, height: 48, marginTop: 20, borderRadius: 10, alignItems: 'center', paddingTop: 4 }}>
                                        <Image source={require('../Images/emp_id.png')} style={{ width: 40, height: 40, padding: 5 }} />
                                    </View>

                                    <TextInput
                                        onChangeText={(value) => setId(value)}
                                        
                                        style={styles.input}
                                        value={Id}
                                        placeholder="Emp.ID" />


                                </View>


                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ backgroundColor: '#0f4c81', width: 48, height: 48, marginTop: 20, borderRadius: 10, alignItems: 'center', paddingTop: 4 }}>
                                        <Image source={require('../Images/lock.png')} style={{ width: 40, height: 40, alignItems: 'center' }} />
                                    </View>
                                    <TextInput
                                        onChangeText={(value) => setPin(value)}
                                        style={styles.input}
                                        value={pass}
                                        secureTextEntry
                                        keyboardType='number-pad'
                                        placeholder="PIN"
                                        onSubmit={Keyboard.dismiss} />

                                </View>




                                <Pressable
                                    onPress={validatee}
                                    style={styles.btn}>
                                    <Text style={{ color: '#fff', fontSize: 20 }}>Login</Text>
                                </Pressable>

                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 40 }}>
                                <Text style={{ fontFamily: 'regular' }}>Part of the Team,</Text>
                                <Text style={{ marginLeft: 10 }}>Part of the Dream!</Text>
                            </View>



                        </View>



                    </View>



                </View>
            </>
        </KeyboardAvoidingWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {

        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        padding: 10,
        width: 200,
        marginTop: 20,
        backgroundColor: 'white'


    },
    btn: {
        marginTop: 30,
        backgroundColor: '#0f4c81',
        paddingHorizontal: 40,
        paddingVertical: 6,
        borderRadius: 15,

    }

})