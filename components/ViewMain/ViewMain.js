
import { Button, FlatList, Text, TextInput, View, TouchableOpacity } from 'react-native'
import ItemCreditCard from "../../components/ItemCreditCard/ItemCreditCard"
import BtnItemAdd from "../../components/BtnItemAdd/BtnItemAdd"
import ModalAddInput from "../Modal/ModalAddInput/ModalAddInput"
import styles from "./ViewMainSS"
import { useState } from 'react'

const ViewMain = () => {
  const [numberCard, setNumberCard] = useState("");
  const [list, setList] = useState([]);

  const [modalAddInputVisible, setModalAddInputVisible] = useState(false);

  const onHandleChange = (t) => setNumberCard(t);

  const renderItem = ({ item }) => (
    <ItemCreditCard
      value={item.value}
    />
  );
  const addItem = () => {
    setList((currentItems) => [
      ...currentItems,
      { id: Math.random().toString(), value: numberCard },
    ]);

  };

  const activeModalAddInput = () => {

    setModalAddInputVisible(true);
  };

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <BtnItemAdd
        actionModalAddInput={activeModalAddInput}
      />
      <View>
        <TextInput
          placeholder="new item"
          placeholderTextColor="black"
          value={numberCard}
          onChangeText={onHandleChange}
        />
        <TouchableOpacity onPress={addItem}>
          <Text>
            añadir
          </Text>
        </TouchableOpacity>
      </View> 
      {/* <ModalAddInput
        isVisible={modalAddInputVisible}
        actionModalAddItem={addItem}
      /> */}
    </View>

  )
}

export default ViewMain
