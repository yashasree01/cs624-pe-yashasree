import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';
import { theme } from '../theme';

const AddCountry = ({ addCountry }) => {
  const [name, setName] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = () => {
    if (name.trim() === '' || currency.trim() === '') {
      return;
    }
    const newCountry = {
      id: uuid.v4(),
      name: name.trim(),
      currency: currency.trim(),
    };
    addCountry(newCountry);
    setName('');
    setCurrency('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Country Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Currency"
        value={currency}
        onChangeText={setCurrency}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Country</Text>
      </TouchableOpacity>
    </View>
  );
};

AddCountry.navigationOptions = {
  title: 'Add Country',
  headerStyle: {
    backgroundColor: theme.primaryColor,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: theme.primaryColor,
    padding: 14,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddCountry;