import React,{useState} from "react"
import {View, Text,ScrollView,StyleSheet,RefreshControl} from "react-native"
import { green } from "react-native-reanimated/lib/typescript/Colors";

export default function Essaie1(){
    const [encour,setEncour]=useState(false);
    const active=()=>{
        setEncour(true);
        setTimeout(()=>{
            setEncour(false);
        },3000);
    }
    return (
        <ScrollView 
        style={{flex:1,backgroundColor:"pink",padding:5,}}
        horizontal
        showsHorizontalScrollIndicator={false}
        refreshControl={
            <RefreshControl refreshing={encour} onRefresh={active} colors={["green","reb","blue"]}></RefreshControl>
        }
        >
            <View style={[styles.container]}><Text></Text></View>
            <View style={[styles.container]}></View>
            <View style={[styles.container]}></View>
            <View style={[styles.container]}></View>

        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"yellow",
        borderRadius: 20,
        width: 350,
        height:500,
        marginBottom:5,
    }
})