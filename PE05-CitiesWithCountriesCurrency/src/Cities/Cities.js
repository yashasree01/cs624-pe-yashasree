import React from 'react';
import { ScrollView, View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { theme } from '../theme';

const Cities = ({ cities, navigation }) => {

  if (!cities || cities.length === 0) {
    return <CenterMessage message="No saved cities!" />;
  }

  return (
    <ScrollView style={styles.container}>
      {cities.map((city) => (
        <TouchableWithoutFeedback
          key={city.id}
          onPress={() => navigation.navigate('City', { city })}
        >
          <View style={styles.cityContainer}>
            <Text style={styles.cityName}>{city.city}</Text>
            <Text style={styles.countryName}>{city.country}</Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </ScrollView>
  );
};

Cities.navigationOptions = {
  title: 'Cities',
  headerStyle: {
    backgroundColor: theme.primaryColor,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cityContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cityName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  countryName: {
    fontSize: 14,
    color: '#666',
  },
});

export default Cities;
