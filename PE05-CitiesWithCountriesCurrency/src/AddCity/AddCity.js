import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';
import { theme } from '../theme';

const AddCity = ({ addCity }) => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = () => {
    if (city.trim() === '' || country.trim() === '') {
      return;
    }
    console.log('Submitting city:', city, country);
    const newCity = {
      id: uuid.v4(),
      city: city.trim(),
      country: country.trim(),
    };
    addCity(newCity);
    setCity('');
    setCountry('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add City</Text>
      </TouchableOpacity>
    </View>
  );
};

AddCity.navigationOptions = {
  title: 'Add City',
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

export default AddCity;
