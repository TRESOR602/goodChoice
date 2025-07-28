import React,{useState} from "react";
import {View,Text,StyleSheet,Image,TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { RootStackParamList } from "../constantes/Types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { scale, verticalScale, moderateScale } from "../styles/responsiveSize";
import { Buttons } from "../components/Buttons";
import { ThemeText } from "../components/ThemeText";

const Connexion=()=>{
    type NavigationProp=NativeStackNavigationProp<RootStackParamList,"Inscription">
    const navigation=useNavigation<NavigationProp>();
    const [number,setNumber]=useState<string>("");
    const inscription=()=>{
        navigation.navigate("Inscription");
    }
    const otp=()=>{
        navigation.navigate("Otp");
    }
    return (
            <View style={style.viewAll}>
                <View style={{flex:1,marginTop:40,}}>
                    <View>
                        <ThemeText variant="h1">Connexion</ThemeText>
                        <ThemeText variant="paragraph" style={{textAlign:"justify"}}>
                            Accédez à votre compte et continuez à profiter d'une expèrience de voyage simplifiée, conviale et pratique.
                        </ThemeText>
                    </View>
                    <View style={{marginTop:20,}}>
                        <ThemeText variant="pBold">Numéro de téléphone</ThemeText>
                        <View style={style.phone}>
                            <Image style={{height:verticalScale(26), width:scale(26),}} source={require('../assets/images/cameroun.png' )}></Image>
                            <ThemeText variant="pBold">     (+237)</ThemeText>
                            <TextInput
                                placeholder="000 000 000"
                                maxLength={9}
                                onChangeText={setNumber}
                                style={[style.inputText,{}]}
                                keyboardType="numeric"
                                placeholderTextColor="black"
                            ></TextInput>
                        </View>
                    </View>
                </View>

                <View style={style.navigate}>
                    <View style={{marginBottom: verticalScale(10),}}>
                        <Buttons name="Suivant" onPress={otp} />
                    </View>
                    <View style={{alignItems:"center", paddingBottom: verticalScale(10),}}>
                        <ThemeText variant="littleP" style={{marginTop: verticalScale(-20),}}>Je n'ai pas de compte, {""}<Text style={{fontWeight:"bold"}} onPress={inscription}>je crée un compte</Text></ThemeText>
                    </View>
                </View>
            </View>
        )
    }
    
    const style=StyleSheet.create({
        viewAll:{
            flex: 1,
            padding: scale(15),
            backgroundColor: '#FFFFFF',
            
        },
        title:{
            fontSize:moderateScale(23),
            fontWeight: "bold"
        },
        navigate:{
            marginBottom: verticalScale(100),
            gap: verticalScale(54),
        },
        inputText:{
            borderRadius: scale(10),
            backgroundColor: '#F5F5F5',
            height: verticalScale(50),
            color: "black",
        },
        phone:{
            paddingLeft: scale(10),
            marginTop: verticalScale(10),
            flexDirection:"row",
            alignItems: "center",
            borderRadius: scale(10),
            backgroundColor: '#F5F5F5',
        },
    })
export default Connexion;