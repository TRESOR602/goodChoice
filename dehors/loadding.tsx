import React,{useEffect,useState} from "react"
import {View, Text, StyleSheet,Image } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

import {scale,verticalScale,moderateScale, height} from '../TousTR/styles/responsiveSize'
import {ThemeText} from '../TousTR/components/ThemeText'

const Loadding=()=>{

    return(
        <View style={{flex:1,padding:1,}}>
            <View>
                <View style={{flexDirection:"row",}}>
                    <AntDesign name="arrowleft" color="black" size={24} />
                    <Text>Filtrer la recherche</Text>
                </View>
                <View style={{flexDirection:"row", justifyContent: 'space-between',}}>
                    <View style={{backgroundColor:"#DCDCDC",borderRadius:40,width:105,height:40,alignItems:"center",alignContent:"center",}}>
                        <Text>
                            Par agence 
                        </Text>
                        <EvilIcons name="chevron-down" color="#000" size={24} />
                    </View>
                    <View style={{backgroundColor:"#DCDCDC",borderRadius:40,width:105,height:40,alignItems:"center",alignContent:"center"}}>
                        <Text>
                            Par prix 
                        </Text>
                        <EvilIcons name="chevron-down" color="#000" size={24} />
                    </View>
                    <View style={{backgroundColor:"#DCDCDC",borderRadius:40,width:105,height:40,alignItems:"center",alignContent:"center"}}>
                        <Text>
                            VIP 
                        </Text>
                        <EvilIcons name="chevron-down" color="#000" size={24} />
                    </View>
                </View>
            </View>

            <View style={{flex:1}}>
                    <MyShimmer />
            </View>
        </View>
    );
}

const MyShimmer=()=>{
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule un chargement de données (ex: API)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 secondes

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>

            <View style={styles.shimmerLeft}>
                <ShimmerPlaceHolder
                        visible={!isLoading}
                        LinearGradient={LinearGradient}
                        style={styles.shimmer}
                    >
                        <Text style={styles.text}>Bonjour !</Text>
                    </ShimmerPlaceHolder>
            </View>

    </View>
  );
}

const styles=StyleSheet.create({
    container: {
        padding: 15,
        marginTop: 25,
        flexDirection: "row",
        borderRadius:10,
        flex:1,
        justifyContent: 'space-between',
      },
      shimmer: {
        width: 90,
        height: 30,
        borderRadius: 35,
      },
      shimmerLeft: {
        flexDirection: "column",       // <-- chaque colonne empile verticalement
        alignItems: 'flex-start'
      },
      shimmerRight: {
        flexDirection: "column",       // <-- chaque colonne empile verticalement
        alignItems: 'flex-end'
      },
      text:{
        fontWeight: "bold",
      },
      column1:{}
})
export default Loadding;