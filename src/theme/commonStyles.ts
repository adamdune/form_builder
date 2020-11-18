import {StyleSheet} from 'react-native';
import colors from './colors';

const commonStyles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  screenContainer: {
    padding: 20,
    flexGrow: 1,
    backgroundColor: colors.gray50,
  },
  card: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.gray200,
    backgroundColor: 'white',
  },
  textInput: {
    borderBottomColor: 'darkgray',
    borderBottomWidth: 2,
  },
  subText: {fontSize: 12, color: colors.gray600},
});

export default commonStyles;
