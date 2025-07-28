import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from './constantes/Types';

import Finaliser from './StackScreens/finaliser';
import Inscription from './StackScreens/Inscription';
import Opt from './StackScreens/Otp';
import Connexion from './StackScreens/Connexion';

import Essaie1 from './essaie/essaie1';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        >

          {/* Les Ecrans "stack" utilisés: */}
          <Stack.Screen name="Essaie1" component={Essaie1} />
          <Stack.Screen name="Finaliser" component={Finaliser} />
          <Stack.Screen name="Inscription" component={Inscription} />
          <Stack.Screen name="Otp" component={Opt} />
          <Stack.Screen name="Connexion" component={Connexion} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


export default App;
