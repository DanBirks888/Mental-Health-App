import React from 'react';
import {
  View,
  Button,
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  Vibration,
} from 'react-native';
import styles from '../../assets/styleSheets';

export default class VisualisationHome extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: () => null,
    };
  };

  render() {
    const { navigate, state } = this.props.navigation;

    return (
      <ImageBackground
        source={require('../../assets/leavesBackground.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.pageContainer}>
          <Text style={styles.title}>Visualisation Page</Text>

          <Image
            source={require('../../assets/brainLogo.png')}
            style={styles.logo}
          />
        </View>
      </ImageBackground>
    );
  }
}
