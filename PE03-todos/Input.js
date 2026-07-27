import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const Input = ({ inputValue, inputChange }) => (
  <TextInput
    style={styles.input}
    placeholder="Add a new todo"
    value={inputValue}
    onChangeText={inputChange}
  />
)

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 10,
    paddingHorizontal: 10
  }
})

export default Input