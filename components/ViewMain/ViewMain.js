
import { Button, FlatList, Text, TextInput, View, TouchableOpacity } from 'react-native'
import ItemCreditCard from "../../components/ItemCreditCard/ItemCreditCard"
import BtnItemAdd from "../../components/BtnItemAdd/BtnItemAdd"
import ModalAddInput from "../Modal/ModalAddInput/ModalAddInput"
import styles from "./ViewMainSS"
import { useState } from 'react'

const ViewMain = (props) => {
  const { switchDisplayCreditCard } = props;
  const [numberCard, setNumberCard] = useState("");
  const [list, setList] = useState([]);
  const [cardSelected, setCardSelected] = useState({});
  const [okStatus, setOkStatus] = useState("❌");
  const [modalAddInputVisible, setModalAddInputVisible] = useState(false);

  const onHandleChange = (t) => setNumberCard(t);

  const addItem = () => {
    setList((currentItems) => [
      ...currentItems,
      { id: Math.random().toString(), value: numberCard },
    ]);
    setNumberCard("");
  };
  const selectedCard = (id) => {
    setCardSelected(list.find((item) => item.id === id));
  };

  const deleteCard = (id) => {
    // selectedCard(id);
    setList((currentState) =>
      currentState.filter((item) => item.id !== id)
    );
  };

  const activeModalAddInput = () => {
    setModalAddInputVisible(true);
  };





  const renderItem = ({ item }) => (

    <View style={{ flexDirection: "row", }}>
      <ItemCreditCard
        value={item.value}
        idItem={item.id}
        actionBtnDelet={deleteCard}
        switchDisplay={switchDisplayCreditCard}

      />
      <TouchableOpacity onPress={() => { setOkStatus("✅") }}>
        <Text>{okStatus}</Text>
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
