import React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import CarouselCards from '../Carousel/CarouselCards';
import styles from '../../assets/styleSheets';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';

export default class CarouselFeelings extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: () => null,
    };
  };

  render() {
    return (
      <View style={styles.pageContainer}>
        <SafeAreaView style={styles.emotionCarousel}>
          <CarouselCards />
        </SafeAreaView>
        <TouchableOpacity
          onPress={() =>
            navigate('CarouselFeelings', Vibration.vibrate(1 * 100))
          }
        >
          <Text style={styles.customBtnBlack}>Thats Me!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
