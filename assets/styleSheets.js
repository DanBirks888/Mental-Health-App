import { StyleSheet, Vibration } from 'react-native';

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
    fontSize: 40,
    paddingVertical: 20,
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  normalText: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 30,
    color: 'white',
    fontStyle: 'italic',
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
    fontStyle: 'italic',
  },
  input: {
    flex: 1,
    marginHorizontal: 20,
    color: 'white',
    fontSize: 20,
  },
  buttonStyle: {
    height: 200,
    width: 10,
  },
  customBtn: {
    color: 'white',
    fontSize: 20,
    padding: 20,
    fontStyle: 'italic',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 10,
  },
  customBtnBlack: {
    color: 'black',
    fontSize: 20,
    padding: 15,
    fontStyle: 'italic',
    textAlign: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 28,
  },
  vertButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  emotionCarousel: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
});
