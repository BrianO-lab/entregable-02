import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ItemCreditCard from "./components/ItemCreditCard/ItemCreditCard";
import BtnItemAdd from "./components/BtnItemAdd/BtnItemAdd";
import ViewMain from "./components/ViewMain/ViewMain";
import ViewCard from './screens/ViewCard/ViewCard';
import { useFonts } from "expo-font";
import { useState, } from 'react'


export default function App() {
  const [loaded] = useFonts({
    Lato: require("./assets/fonts/Lato-Regular.ttf"),
  });
  const [screenCreditCard, setScreenCreditCard] = useState(false);
  const [numberCreditCardSelect, setNumberCreditCardSelect] = useState("");

  const handleScreenCreditCard = (numberCreditCard) => {
    setNumberCreditCardSelect(numberCreditCard);
    setScreenCreditCard(true);
  };
  const backToMain = () => {
    setScreenCreditCard(false)
  };
  let content = <ViewMain switchDisplayCreditCard={handleScreenCreditCard} />;

  if (screenCreditCard) {
    content = <ViewCard numberCreditCardSelect={numberCreditCardSelect} backToMainMenu={backToMain} />
  } else {
    content = <ViewMain switchDisplayCreditCard={handleScreenCreditCard} />;
  };



  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>

      {content}

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',

    justifyContent: 'center',
  },
});
