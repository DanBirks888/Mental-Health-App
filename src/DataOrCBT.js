import React from 'react';
import {
  View,
  Button,
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from '../assets/styleSheets';

export default class DataOrCBT extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: () => null,
      title: navigation.getParam('user'),
    };
  };

  render() {
    const { navigate, state } = this.props.navigation;

    return (
      <ImageBackground
        source={require('../assets/leavesBackground.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.pageContainer}>
          <Text style={styles.title}>Welcome Back {state.params.user}</Text>

          <Image
            source={require('../assets/brainLogo.png')}
            style={styles.logo}
          />

          <TouchableOpacity onPress={() => navigate('Feeling')}>
            <Text style={styles.customBtn}>Document a feeling</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate('DataOrCBT')}>
            <Text style={styles.customBtn}>Emotional Visualisations</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
