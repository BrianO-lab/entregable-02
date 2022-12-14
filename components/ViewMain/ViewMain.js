import { Button, FlatList, Text, TextInput, View, TouchableOpacity } from 'react-native'
import ItemCreditCard from "../../components/ItemCreditCard/ItemCreditCard"
import BtnItemAdd from "../../components/BtnItemAdd/BtnItemAdd"
import ModalAddInput from "../Modal/ModalAddInput/ModalAddInput"
import styles from "./ViewMainSS"
import { useState, useEffect, useReducer } from 'react'

const ViewMain = (props) => {
  const { switchDisplayCreditCard, arrayCard, arraySetCard } = props;
  const [numberCard, setNumberCard] = useState("");
  const [list, setList] = useState(arrayCard);
  const [cardSelected, setCardSelected] = useState({});

  const [modalAddInputVisible, setModalAddInputVisible] = useState(false);
  const onHandleChange = (t) => setNumberCard(t);



  const addItem = () => {
    setList((currentItems) => [
      ...currentItems,
      { id: Math.random().toString(), value: numberCard, status: "❌" },
    ]);
    setNumberCard("");
  };
  const selectedCard = (id) => {
    setCardSelected(list.find((item) => item.id === id));
  };

  const deleteCard = (id) => {
    setList((currentState) =>
      currentState.filter((item) => item.id !== id)
    );
  };

  const activeModalAddInput = () => {
    setModalAddInputVisible(true);
  };

  const changeStatus = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return {
          ...item, status: "✅"
        }
      } else {
        return item;
      }
    });
    setList(newList);
  };

  const renderItem = ({ item }) => (

    <View style={{ flexDirection: "row", }}>

      <ItemCreditCard
        value={item.value}
        idItem={item.id}
        actionBtnDelet={deleteCard}
        switchDisplay={switchDisplayCreditCard}
        newlistCard={list}
      />
      <TouchableOpacity onPress={() => { changeStatus(item.id) }}>

        <Text>{item.status}</Text>
      </TouchableOpacity>
    </View>
  );

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
      <View style={styles.newItem}>
        <View style={styles.inputTextConteiner}>
          <TextInput
            style={styles.inputText}
            placeholder="new item"
            placeholderTextColor="grey"
            value={numberCard}
            onChangeText={onHandleChange}
          />
        </View>
        <View style={styles.btnAdd}>
          <TouchableOpacity onPress={addItem} style={styles.btnAddText}>
            <Text style={styles.btnAddText}>
              Añadir
            </Text>
          </TouchableOpacity>
        </View>



      </View>
      {/* <ModalAddInput
        isVisible={modalAddInputVisible}
        actionModalAddItem={addItem}
      /> */}
    </View>

  )
}

export default ViewMain
