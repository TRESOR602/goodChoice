import React,{useEffect, useRef,useState} from "react";
import {View,Text,StyleSheet, TextInput} from "react-native";
import { TextInput as RNTextInput } from "react-native";

import Connexion from "./Connexion";
import { Buttons } from "../components/Buttons";
import { scale, verticalScale, moderateScale } from "../styles/responsiveSize";
import { ThemeContext } from "react-native-elements";
import { ThemeText } from "../components/ThemeText";

const Otp=()=>{
    const [second,setSecond]=useState<number>(59);
    const [min,setMin]=useState(1);

    const length=5;
    const inputs=useRef<RNTextInput[]>([]);
    const [otp,setOtp]=useState(Array(length).fill(''))

    useEffect(()=>{
       const t=setTimeout(()=>{
            
        if(second>0){
            setSecond(second-1);
        }else if(min>0) {
            setMin(min-1);
            setSecond(59);
        }
       },1000)
       return () => clearTimeout(t);
    },[second,min])

    const handleChange=(text:string,index:number)=>{
        const otpcpy=[...otp];
        otpcpy[index]=text;
        setOtp(otpcpy);
        if(text && index<length-1){
            inputs.current[index+1]?.focus();
        }
        else if(text==='' && index>0){
            inputs.current[index-1]?.focus();
        }else if(text !='' && index<length){
            inputs.current[index+1]?.focus();
        }
    };
    
    const renvoyezCode=()=>{
        return null;
    }

    return (
        <View style={{backgroundColor: '#FFFFFF',flex:1, padding: scale(15),}}>
            <View style={{flex: 1,marginTop:verticalScale(50)}}>
                <View style={{}}>
                    <Text style={style.title}>Entrez le code</Text>
                    <Text>Veuillez saisir le code de vérification envoyé à votre numéro de téléphone</Text>
                </View>
                <View style={style.otpStyle}>
                    {otp.map((digit, index) => (
                        <TextInput
                        key={index}
                        ref={(val) =>{
                             if(val){
                                inputs.current[index] = val;
                            }}}
                        style={style.input}
                        keyboardType="numeric"
                        maxLength={1}
                        value={digit}
                        textAlign="center"
                        onChangeText={(text) => handleChange(text, index)}
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
                              const otpcpy = [...otp];
                              otpcpy[index - 1] = '';
                              setOtp(otpcpy);
                              inputs.current[index - 1]?.focus();
                            }
                          }}
                        />
                    ))}
                </View>
                <View style={{alignItems: "center", paddingTop:verticalScale(25),}}>
                    <View style={{alignItems: "center",}}>
                        <ThemeText variant="h5">{min}:{second}</ThemeText>
                        <ThemeText variant="littleP" style={{marginTop:verticalScale(60),}}>Je n'ai pas reçu de code, {""}<Text style={{fontWeight:"bold"}} onPress={renvoyezCode}>renvoyez</Text></ThemeText>
                    </View>
                </View>
            </View>
            
            <View style={style.navigate}>
            <View style={{marginBottom: verticalScale(-40),}}>
                <Buttons name="Valider" onPress={()=>null} />
            </View>
            </View>
        </View>
    )
}

const style=StyleSheet.create({
    title:{
        fontSize:moderateScale(23),
        fontWeight: "bold",
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        fontSize: moderateScale(24),
        width: scale(55),
        height: verticalScale(55),
        borderRadius: 8,
        backgroundColor: '#f5f5f5',
        color: "black",
        marginTop: verticalScale(30),
    },
    otpStyle:{
        flexDirection:"row",
        justifyContent: 'space-evenly',
    },
    navigate:{
        marginBottom: verticalScale(90),
        gap: verticalScale(100),
        paddingBottom: verticalScale(130),
    }

})
export default Otp;