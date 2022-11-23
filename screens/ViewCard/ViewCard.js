import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from "../../constants/colors";
import React from 'react';




const ViewCard = (props) => {
  const { numberCreditCardSelect, backToMainMenu } = props;
  return (
    <View style={styles.container}>
      <Text>{numberCreditCardSelect}</Text>
      <TouchableOpacity onPress={() => backToMainMenu()}>
        <Text>
          X
        </Text>
      </TouchableOpacity>
    </View>

  )
}

export default ViewCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  }

})