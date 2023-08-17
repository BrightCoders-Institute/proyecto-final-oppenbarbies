import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

const DescriptionInputStyles = StyleSheet.create({
  descriptionContainer: {
    textAlign: 'left',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  inputDescription: {
    textAlign: 'left',
    width: 355,
    backgroundColor: Colors.descriptionInput,
    height: 150,
    borderRadius: 10,
    fontFamily: 'Inter-ExtraBold',
    fontSize: 20,
    paddingLeft: 10,
    color: Colors.babyBlue,
  },
  textCounter: {
    position: 'absolute',
    right: 25,
    bottom: 8,
    fontSize: 12,
    color: Colors.strongGray,
    textAlign: 'right',
  },

});

export default DescriptionInputStyles;
