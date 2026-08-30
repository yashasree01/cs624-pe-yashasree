import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { theme } from '../theme';

const Countries = ({ countries }) => {
  if (!countries || countries.length === 0) {
    return <CenterMessage message="No saved countries!" />;
  }

  return (
    <ScrollView style={styles.container}>
      {countries.map((country) => (
        <View key={country.id} style={styles.countryContainer}>
          <Text style={styles.countryName}>{country.name}</Text>
          <Text style={styles.currencyName}>{country.currency}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

Countries.navigationOptions = {
  title: 'Countries',
  headerStyle: {
    backgroundColor: theme.primaryColor,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countryContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  countryName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  currencyName: {
    fontSize: 14,
    color: '#666',
  },
});

export default Countries;