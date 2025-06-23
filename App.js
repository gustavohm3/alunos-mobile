import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaAlunos from './src/screens/ListaAlunos';
import CadastroAluno from './src/screens/CadastroAluno';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaAlunos">
        <Stack.Screen name="ListaAlunos" component={ListaAlunos} options={{ title: 'Alunos' }} />
        <Stack.Screen name="CadastroAluno" component={CadastroAluno} options={{ title: 'Cadastro' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}