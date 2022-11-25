import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from "../../constants/colors";
import React from 'react';




const ViewCard = (props) => {
  const { numberCreditCardSelect, backToMainMenu } = props;
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text >{numberCreditCardSelect}</Text>
      </View>

      <View style={styles.btnBack}>
        <TouchableOpacity onPress={() => backToMainMenu()}>
          <Text style={styles.btnBackText}>
            Volver
          </Text>
        </TouchableOpacity>
      </View>
      {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true} /> */}
    </View>

  )
}

export default ViewCard

const styles = StyleSheet.create({
  container: {
   
    marginTop: 50,
    height: '100%',

  },
  title: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',


  },
  btnBack: {
    backgroundColor: colors.secondary,
    position: "absolute",
    bottom: "94%",
    left: "80%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnBackText: {
    margin: 10,
    paddingBottom:2,

  },

})