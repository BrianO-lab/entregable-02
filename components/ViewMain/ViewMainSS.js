import { StyleSheet } from 'react-native'
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',
    justifyContent: 'center',
  },
  newItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 35,


  },
  inputTextConteiner: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0,
    shadowRadius: 4.65,
    elevation: 8,
  },
  inputText: {
    textAlign: 'center',
  },

  btnAdd: {
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0,
    shadowRadius: 4.65,

    elevation: 8,
  },

  btnAddText: {
    marginHorizontal: 5,


  },
})

export default styles;