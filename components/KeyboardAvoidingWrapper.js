import React from "react";
import{ScrollView,TouchableWithoutFeedback,Keyboard,KeyboardAvoidingView } from 'react-native';


const KeyboardAvoidingWrapper=({children})=>{
    return(
      <KeyboardAvoidingView style={{flex:1}}>
                        <ScrollView>
                        <TouchableWithoutFeedback onpress={Keyboard.dismiss}>
                            {children}
                        </TouchableWithoutFeedback>
                        </ScrollView>

      </KeyboardAvoidingView>                                                                                                         
           
        
                                                                                                                   
        );
}
export default KeyboardAvoidingWrapper;
