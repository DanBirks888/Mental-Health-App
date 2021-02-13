import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  pageContainer: {
    flex: 1,
    padding: 50,
    justifyContent: 'space-evenly',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  titleLogo: {
    height: 100,
    width: 240,
    resizeMode: 'contain',
    alignSelf: 'center',
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
    textAlign: 'center',
    lineHeight: 30,
    color: 'white',
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
  buttonStyle: {
    height: 200,
    width: 10,
  },
});
