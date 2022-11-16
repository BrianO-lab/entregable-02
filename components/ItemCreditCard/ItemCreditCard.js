import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./ItemCreditCardSS"

const ItemCreditCard = (props) => {
  const { value, actionBtnDelet, idItem } = props;
  return (
    <View style={styles.ItemCreditCard}>
      <View style={styles.ItemCreditCardContainer} >
        <TouchableOpacity style={styles.ContainerText}>
          <Text style={styles.Text}>Terminada en {value}</Text>
          <Text style={styles.Text}>$12345</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => actionBtnDelet(idItem)} >
          <Text> X</Text>
        </TouchableOpacity>
      </View>
    </View>
    // <View >
    //   <Text style={styles.Text}>Terminada en {props.value}</Text>
    //   <Text style={styles.Text}>$ 12345</Text>
    // </View>


  )
}
// onPress={() => selectedItem(props.id)}

export default ItemCreditCard

