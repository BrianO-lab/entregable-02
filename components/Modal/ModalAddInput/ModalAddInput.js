import { View, Text, TextInput, TouchableOpacity, Modal as NewModal } from 'react-native'
import styles from "./ModalAddInputSS"
import { useState } from 'react'


const ModalAddInput = (props) => {
  const { isVisible, actionModalAddItem } = props;

  const [numberCard, setNumberCard] = useState("");

  const onHandleChange = (t) => setNumberCard(t);
  return (
    <NewModal animationType="fade" transparent={true} visible={isVisible}>

      <View style={styles.ContainerModal}>
        <TextInput
          placeholder="new item"
          placeholderTextColor="black"
          value={numberCard}
          onChangeText={onHandleChange}
        />
        <TouchableOpacity onPress={() => actionModalAddItem(numberCard)}>
          <Text>
            añadir
          </Text>
        </TouchableOpacity>
      </View>

    </NewModal>


  )
}

export default ModalAddInput