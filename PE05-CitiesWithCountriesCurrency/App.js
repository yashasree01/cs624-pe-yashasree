import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cities from './src/Cities/Cities';
import AddCity from './src/AddCity/AddCity';
import Countries from './src/Countries/Countries';
import AddCountry from './src/AddCountry/AddCountry';

const Tab = createBottomTabNavigator();

export default function App() {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);

  const addCity = (city) => {
    setCities((prevCities) => [...prevCities, city]);
  };

  const addCountry = (country) => {
    setCountries((prevCountries) => [...prevCountries, country]);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Cities">
          {(props) => <Cities {...props} cities={cities} addCity={addCity} />}
        </Tab.Screen>
        <Tab.Screen name="AddCity">
          {(props) => <AddCity {...props} cities={cities} addCity={addCity} />}
        </Tab.Screen>
        <Tab.Screen name="Countries">
          {(props) => <Countries {...props} countries={countries} addCountry={addCountry} />}
        </Tab.Screen>
        <Tab.Screen name="AddCountry">
          {(props) => <AddCountry {...props} countries={countries} addCountry={addCountry} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}