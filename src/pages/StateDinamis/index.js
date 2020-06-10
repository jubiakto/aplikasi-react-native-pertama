import React, {useState, Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

// State dengan fungsional component (Hooks)
const Counter = () => {
  const [nomor, setNomor] = useState(0);
  return (
    <View>
      <Text>{nomor}</Text>
      <Button title="Tambah" onPress={() => setNomor(nomor + 1)} />
    </View>
  );
};

// State dengan class component
class CounterClass extends Component {
  state = {
    angka: 0,
  };
  render() {
    return (
      <View>
        <Text>{this.state.angka}</Text>
        <Button
          title="Tambah"
          onPress={() => this.setState({angka: this.state.angka + 1})}
        />
      </View>
    );
  }
}

const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>
        Materi Component Dinamis dengan State
      </Text>
      <Text style={styles.titleSection}>Function Component (Hooks)</Text>
      <Counter />
      <Counter />
      <Text style={styles.titleSection}>Class Component</Text>
      <CounterClass />
      <CounterClass />
    </View>
  );
};

export default StateDinamis;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 20,
  },
  titleSection: {
    marginTop: 20,
  },
});
