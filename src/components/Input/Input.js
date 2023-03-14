import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './Input.style'

const Input = ({ placeholder, onChangeText, value, isSecure }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={isSecure}
        autoCapitalize="none"
        style={styles.inputComponent}
      />
    </View>
  )
}

export default Input