import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ItemCreditCard from "./components/ItemCreditCard/ItemCreditCard"
import BtnItemAdd from "./components/BtnItemAdd/BtnItemAdd"

export default function App() {
  return (
    <View style={styles.container}>

      <ItemCreditCard />

      <BtnItemAdd />
    
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
