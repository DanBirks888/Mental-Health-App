import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 200,
  },
  header: {
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    paddingVertical: 20,
    color: 'black',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  customBtn: {
    color: 'black',
    padding: 10,
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 10,
    flex: 1,
  },
});

export default CarouselCardItem;
