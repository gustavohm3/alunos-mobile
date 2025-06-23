import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { getAlunos, deleteAluno } from '../services/api';

export default function ListaAlunos({ navigation }) {
  const [alunos, setAlunos] = useState([]);

  const carregarAlunos = async () => {
    const data = await getAlunos();
    setAlunos(data);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', carregarAlunos);
    return unsubscribe;
  }, [navigation]);

  const handleDelete = async (id) => {
    await deleteAluno(id);
    carregarAlunos();
  };

  return (
    <View style={styles.container}>
      <Button title="Cadastrar Novo" onPress={() => navigation.navigate('CadastroAluno')} />
      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nome} - {item.curso}</Text>
            <Button title="Excluir" onPress={() => handleDelete(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }
});