import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './BtnItemAddSS'

const BtnItemAdd = (props) => {
  const { actionModalAddInput } = props;
  return (

    <View style={styles.ButtonContainer}>
      <TouchableOpacity style={styles.Btn} onPress={() => actionModalAddInput()} >
        <Text style={styles.BtnText}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BtnItemAdd