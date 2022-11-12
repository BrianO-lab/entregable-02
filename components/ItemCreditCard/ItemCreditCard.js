import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from "./ItemCreditCardSS"

const ItemCreditCard = () => {
  return (
    <View style={styles.ItemCreditCard}>
      <Text style={styles.Text}>Terminada en 1234</Text>
      <Text style={styles.Text}>$ 12345</Text>
    </View>
    
  )
}

export default ItemCreditCard

