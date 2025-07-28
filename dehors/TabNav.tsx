import React from "react"
import {View,Text} from "react-native"
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

function AccueilScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Accueil</Text>
      </View>
    );
  }
  
  function ProfilScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profil</Text>
      </View>
    );
  }

  const Tab=createBottomTabNavigator();

const Screens=()=>{
     
    return(

            
                <Tab.Navigator
                   screenOptions={
                    ({route})=>({
                      tabBarIcon:({color,size})=>{
                        let iconName: string = "";
                        if(route.name==="Accueil"){
                          iconName='home';
                        }else if(route.name==="Profil"){
                          iconName="person";
                        }
                        return <Ionicons name={iconName} size={size} color={color} />
                      },

                      tabBarActiveTintColor: "tomato",
                      tabBarInactiveTintColor: "black",
                      tabBarStyle:{backgroundColor:"tranparent"},
                    
                     
                   })
                  }
                >
                    <Tab.Screen name="Accueil" component={AccueilScreen} />
                    <Tab.Screen name="Profil" component={ProfilScreen} />
                </Tab.Navigator>
            
        
    );
}
export default Screens;