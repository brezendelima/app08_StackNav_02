import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Principal from './src/Telas/Principal';
import Motos from './src/Telas/Motos';
import Carros from './src/Telas/Carros';
import Avioes from './src/Telas/Avioes';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Motos" component={Motos} />
        <Stack.Screen name="Carros" component={Carros} />
        <Stack.Screen name="Avioes" component={Avioes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;