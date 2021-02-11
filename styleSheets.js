import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  pad: {
    padding: 50,
  },
  logo: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontSize: 30,
    paddingVertical: 20,
    color: 'white',
    textAlign: 'center',
  },
  normalText: {
    fontSize: 20,
    paddingVertical: 20,
    color: 'white',
    textAlign: 'center',
  },
  loginInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'white',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    marginVertical: 15,
    borderColor: 'white',
  },
  input: {
    flex: 1,
    marginHorizontal: 20,
  },
  confirmBtn: {
    height: 200,
    width: 10,
  },
});
