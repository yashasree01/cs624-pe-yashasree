import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Heading = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Todos</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 10
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default Heading