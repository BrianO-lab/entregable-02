import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./ItemCreditCardSS"

const ItemCreditCard = (props) => {
  return (
    <View style={styles.ItemCreditCard}>
      <TouchableOpacity >
        <Text style={styles.Text}>Terminada en {props.value}</Text>
        <Text style={styles.Text}>$ 12345</Text>
      </TouchableOpacity>
    </View>
    // <View >
    //   <Text style={styles.Text}>Terminada en {props.value}</Text>
    //   <Text style={styles.Text}>$ 12345</Text>
    // </View>


  )
}
// onPress={() => selectedItem(props.id)}

export default ItemCreditCard

