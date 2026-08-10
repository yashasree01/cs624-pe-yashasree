import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage}
              source={require('./assets/user.png')}/>
          </View>
          <Text style={styles.cardName}>Yashasree</Text>
          <Text style={styles.cardOccupation}>Software Engineer</Text>
          <Text style={styles.cardDescription}>
            Passionate about building clean, user-friendly mobile apps and always learning something new.
          </Text>
        </View>
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    padding: 10
  },
  cardImage: {
    width: 80,
    height: 80
  },
  cardName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20
  },
  cardOccupation: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'white',
    marginTop: 5
  },
  cardDescription: {
    fontSize: 13,
    color: 'white',
    textAlign: 'center',
    marginTop: 15,
    paddingHorizontal: 20
  }
});