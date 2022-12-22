import React from "react";
import { View, Button, Text, StyleSheet, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Card } from "react-native-paper";

const AttendenceReport = () => {

    return (
      <View style={styles.container}>
          <View style={{ width: wp(100), height: hp(100) }}>
              <View style={{ width: wp(100), height: hp(12), backgroundColor: '#ffd203' }}>
                  <View style={{ flexDirection: 'row' }}>
                      <Image source={require('../Images/less-than.png')} style={{ width: 30, height: 30, marginTop: 35 }} />
                      <Text style={{ fontSize: 20, marginTop: 35, marginLeft: 20 }}>Attendance Report</Text>
                  </View>

              </View>

              <View style={{ width: wp(100), height: hp(18) }}>
                  <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 10}}>Filter</Text>
                  <View style={{ width: wp(80), height: hp(9), borderBottomColor: '#D3D3D3', borderBottomWidth: 2, alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                      <View style={{ width: wp(30), height: hp(5), borderColor: '#D3D3D3', borderWidth: 1, backgroundColor: 'white', borderRadius: 10 }}>
                          <View style={{ width: 38, height: 40, backgroundColor: '#0f4c81', borderRadius: 10, alignItems: 'center', paddingTop: 5 }}>
                              <Image source={require('../Images/calendar_icon.png')} style={{ width: 30, height: 30}} />
                          </View>
                      </View>

                      <View style={{ width: wp(30), height: hp(5), borderColor: '#D3D3D3', borderWidth: 1, backgroundColor: '#ffd203', flexDirection: 'row', borderRadius: 10 }}>
                          <View style={{ width: 38, height: 40, backgroundColor: '#0f4c81', borderRadius: 10, alignItems: 'center', paddingTop: 5, }}>
                              <Image source={require('../Images/salary_icon.png')} style={{ width: 30, height: 30 }} />
                          </View>
                          <View style={{ flexDirection: 'row' }}>
                              <Text style={{ fontSize: 20, marginLeft: 5, marginTop: 7,fontWeight:'bold' }}>₹ 15000</Text>
                          </View>
                      </View>

                  </View>
              </View>

              <View style={{ height: hp(4), width: wp(30), backgroundColor: '#ffd203', alignSelf: 'center', borderRadius: 10 }}>
                  <Text style={{ fontSize: 20, textAlign: 'center', paddingTop: 2 }}>December</Text>
              </View>

              <View style={{ width: wp(75), height: hp(10), borderColor: '#D3D3D3', borderWidth: 1, alignSelf: 'center', marginTop: 20, borderRadius: 15, flexDirection: 'row' }}>
                  <View style={{ width: 84, height: 82, backgroundColor: '#0f4c81', borderRadius: 10 }}>
                      <View style={{ height: 42, borderBottomWidth: 1, borderBottomColor: '#ffd203', borderRadius: 15 }}>
                          <Text style={{ fontSize: 15, color: 'white', textAlign: 'center', marginTop: 10 }}>Present</Text>
                      </View>
                      <View style={{ height: 40 }}>
                          <Text style={{ fontSize: 15, color: 'white', textAlign: 'center', marginTop: 10 }}>01-12-2022</Text>
                      </View>
                  </View>
                  <View style={{ width: 216, justifyContent: 'space-around', flexDirection: 'row', marginLeft: 5 }}>
                      <View style={{ width: 90, height: 82, borderRadius: 10 }}>
                          <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 8 }}>Punch IN</Text>
                          <View style={{ width: 85, height: 35, backgroundColor: '#0f4c81', marginTop: 8, borderRadius: 10, flexDirection: 'row' }}>
                              <View style={{ width: 55, marginTop: 7 }}>
                                  <Text style={{ fontSize: 15, textAlign: 'center', color: 'white' }}>09:25</Text>
                              </View>
                              <View style={{ width: 30, height: 35, backgroundColor: '#ffd203', borderRadius: 10 }}>
                                  <Image source={require('../Images/location_icon.png')} style={{ width: 25, height: 25, marginTop: 5, marginLeft: 2 }} />
                              </View>
                          </View>
                      </View>

                      <View style={{ width: 90, height: 82, borderRadius: 10 }}>
                          <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 8 }}>Punch OUT</Text>
                          <View style={{ width: 85, height: 35, backgroundColor: '#0f4c81', marginTop: 8, borderRadius: 10, flexDirection: 'row' }}>
                              <View style={{ width: 55, marginTop: 7 }}>
                                  <Text style={{ fontSize: 15, textAlign: 'center', color: 'white' }}>09:25</Text>
                              </View>
                              <View style={{ width: 30, height: 35, backgroundColor: '#ffd203', borderRadius: 10 }}>
                                  <Image source={require('../Images/location_icon.png')} style={{ width: 25, height: 25, marginTop: 5, marginLeft: 2 }} />
                              </View>
                          </View>
                      </View>

                   
                  </View>
              </View>

          </View>
      </View>
  );
}

export default AttendenceReport;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
});