import React,{useEffect} from "react";
import {View,Text,StyleSheet,Image,StatusBar} from "react-native"
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { scale, verticalScale,moderateScale,moderateScaleVertical} from '../styles/responsiveSize'
import { Buttons } from "../components/Buttons";
import { RootStackParamList } from "../constantes/Types";
import {ThemeText} from "../components/ThemeText"

const Finaliser = () => {

    //Le useEffect suivant sert à masquer la barre de Statut
    useEffect(() => {
        StatusBar.setHidden(true);
    }, []);
    
    //Declaration du type NavigationProp pour les navigations
    type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
const navigation = useNavigation<NavigationProp>();
    const finaliserA=()=>{
        navigation.navigate("Inscription");
    }
    const finaliserB=()=>{
        navigation.navigate("Connexion");
    }

    return (
        <View style={style.viewAll}>
            <View style={style.view1}>
                <View style={style.styleViewIm}>
                    <Image source={require("../assets/images/image8.png")} style={style.styleIm}></Image>
                </View>
                <View style={style.styleViewText}>
                    <ThemeText variant="h5">Finaliser votre réservation</ThemeText>
                    {/* <Text style={style.text1}>Finaliser votre réservation</Text> */}
                    <View >
                        <ThemeText variant="paragraph" color="pargraphColor" style={{textAlign:"center",lineHeight:20,}}>
                            Avoir un compte vous permet de réserver les voyages et pleins d'autres options
                        </ThemeText>
                    </View>
                    {/* <Text style={style.text2}>Avoir un compte vous permet de réserver les voyages et pleins d'autres options</Text> */}
                </View>
            </View>

            <View style={style.view2}>

                <View style={style.button1}>
                    <Buttons name="Je crée un compte" onPress={finaliserA}></Buttons>
                </View>
                <View>
                    <Buttons name="Je me connecte" onPress={finaliserB} color='#FFFFFF' borderSize={0.7}></Buttons>
                </View>
            </View>
            
        </View>
    );

}
 const style=StyleSheet.create({
    viewAll:{
        flex:1,
        padding: scale(14),
        backgroundColor: '#FFFFFF',
    },
    view1:{
        flex:1,
        alignItems: "center",
        marginTop: verticalScale(60),
    },
    view2:{
        marginBottom: verticalScale(130),
        gap:verticalScale(60),
    },
    styleIm:{
        width: scale(70),
        height: verticalScale(70),
        resizeMode: 'cover'
    },
    styleViewIm:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 245, 228, 1)",
        width: scale(100),
        height: verticalScale(100),
        borderRadius: scale(50),
        marginBottom: verticalScale(20),
    },
    styleViewText:{
        alignItems: "center",
    },
    text1:{
        fontWeight: "bold",
        fontSize: moderateScale(20),
    },
    text2:{
        fontSize: moderateScaleVertical(15),
        textAlign:"center",
    },
    button1:{
        marginBottom: verticalScale(-50),
    }
 })
export default(Finaliser);