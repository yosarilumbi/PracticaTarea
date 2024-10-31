import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight, FlatList, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function App() {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);

  const agregarTarea = () => {
    if (tarea) {
      const nuevaTarea = {
        id: uuid.v4(),
        nuevaTarea: tarea,
        completada: false,
      };
      setTareas([...tareas, nuevaTarea]);
      setTarea(''); 
    }
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <View style={styles.contenedorPrincipal}>
      <Text style={styles.titulo}>Tareas</Text>
      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          placeholder="Ingresa una tarea"
          value={tarea}
          onChangeText={setTarea}
        />
        <TouchableHighlight style={styles.boton} onPress={agregarTarea}>
          <Text style={styles.botonTexto}>Agregar Tarea</Text>
        </TouchableHighlight>
      </View>
      <FlatList
        data={tareas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tarea}>
            <Text>{item.nuevaTarea}</Text>
            <AntDesign name='close' onPress={() => eliminarTarea(item.id)} style={styles.icono} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4D03F',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  formulario: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: '#16A085',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  boton: {
    backgroundColor: '#1E8449',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  botonTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  tarea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: '#1A5276',
    borderBottomWidth: 1,
  },
  icono: {
    color: 'black',
    fontSize: 30,
  },
});

