import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { postAluno } from '../services/api';

export default function CadastroAluno({ navigation }) {
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [curso, setCurso] = useState('');

  const handleSubmit = async () => {
    await postAluno({ nome, matricula, curso });
    navigation.navigate('ListaAlunos');
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nome" style={styles.input} value={nome} onChangeText={setNome} />
      <TextInput placeholder="Matrícula" style={styles.input} value={matricula} onChangeText={setMatricula} />
      <TextInput placeholder="Curso" style={styles.input} value={curso} onChangeText={setCurso} />
      <Button title="Salvar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 }
});