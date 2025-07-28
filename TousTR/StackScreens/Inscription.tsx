import React,{useState} from "react";
import {View,Text, StyleSheet,TextInput,Image,TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import type {NativeStackNavigationProp} from "@react-navigation/native-stack";
import RNPickerSelect from 'react-native-picker-select';

import { RootStackParamList } from "../constantes/Types";
import { Buttons } from "../components/Buttons";
import { scale, verticalScale, moderateScale } from "../styles/responsiveSize";
import {ThemeText} from "../components/ThemeText"
import InputComponents from "../components/InputComponents"

const Inscription = () => {
    const [nom, setNom] = useState<string>("");
const [number, setNumber] = useState<string>("");
const [ville, setVille] = useState<string>("");

    type NavigationProp=NativeStackNavigationProp<RootStackParamList,"Inscription">
    const navigation = useNavigation<NavigationProp>();

    const InscriptionA = async () => {
        navigation.navigate("Otp");
    };

    const InscriptionB=async ()=>{
        navigation.navigate("Connexion");
    }

    return (
        <View style={style.viewAll}>
            <View style={style.content}>
                <View style={style.viewText}>
                        {/* <Text style={style.text}>Créer un compte</Text> */}
                        <ThemeText variant="h5" >Créer un compte </ThemeText>
                        <ThemeText variant="paragraph">
                            Explorez une nouvelle expérience de voyage 
                            simplifiée en vous inspirant dès maintenant
                        </ThemeText>
                </View>

                <View style={style.infos}>
                    <View style={style.elemsInfos}>
                        <ThemeText variant="pBold">Nom complet</ThemeText>
                        <TextInput placeholder="Entrez votre nom complet" placeholderTextColor="black" style={style.inputText}></TextInput>
                    </View>

                    <View style={style.elemsInfos}>
                        <ThemeText variant="pBold">Numéro de téléphone</ThemeText>

                        <View style={style.phone}>
                            <Image style={{height:26, width:26}} source={require('../assets/images/cameroun.png' )}></Image>
                            <Text style={{fontWeight:"bold"}}>     (+237)</Text>
                            <TextInput
                                placeholder="000 000 000"
                                onChangeText={setNumber}
                                style={[style.inputText,{}]}
                                keyboardType="numeric"
                                placeholderTextColor="black"
                                maxLength={9}
                            ></TextInput>
                        </View>
                        </View>
                    <View>

                    <View style={style.elemsInfos}>
                            <ThemeText variant="pBold">Votre ville</ThemeText>
                            <View >
                                <InputComponents
                                    
                                    placeholder="Sélectionnez votre ville"
                                
                                    data={[
                                        { id:1, nom:"bafoussam" },
                                        { id:2, nom:"bamenda" },
                                        { id:3, nom:"bangante" },
                                        { id:4, nom:"bertoua" },
                                        { id:5, nom:"Buea" },
                                    ]}
                                    
                                />
                            </View>
                            
                        </View>
                    </View>
                </View>
            </View>
            <View style={style.navigue}>
                <View style={{marginBottom: verticalScale(-40),}}>
                        <Buttons name="Inscription" onPress={InscriptionA} />
                </View>
                <View style={{alignItems:"center",marginTop:verticalScale(90),}}>
                    <ThemeText variant="littleP">J'ai déjà un compte, {""}<Text style={style.connecter} onPress={InscriptionB}>je me connecte</Text></ThemeText>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    viewAll:{
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: scale(15),
    },
    content: {
        flex: 1,
      },
    viewText: {
        paddingTop: verticalScale(10),
        marginTop: verticalScale(20),
        justifyContent:"center",
    },
    text: {
        fontSize:moderateScale(23),
        fontWeight: "bold",
        alignItems: "center",
    },
    inputText:{
        borderRadius: scale(10),
        backgroundColor: '#F5F5F5',
        height: verticalScale(50),
        color: "black",
    },
    connecter:{
        fontWeight: "bold",
    },
    navigue:{
        paddingBottom: verticalScale(100),
    },
    phone:{
        paddingLeft: scale(10),
        flexDirection:"row",
        alignItems: "center",
        borderRadius: scale(10),
        backgroundColor: '#F5F5F5',
    },
    infos:{
        justifyContent: "space-evenly",
        margin: scale(10),
        gap: verticalScale(15),
        marginTop: verticalScale(40),
    },
    elemsInfos:{
        justifyContent: "space-between",
        gap: verticalScale(10),
    },
    ville:{
        backgroundColor: '#F5F5F5',
        color: "black",
    },
});
export default Inscription;