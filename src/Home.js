import React from 'react';
import {
  View,
  Button,
  Image,
  ImageBackground,
  StatusBar,
  Text,
  Vibration,
} from 'react-native';
import styles from '../assets/styleSheets';

export default class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: () => null,
    };
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ImageBackground
        source={require('../assets/leavesBackground.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.pageContainer}>
          <Image
            source={require('../assets/dearMe.png')}
            style={styles.titleLogo}
          />
          <Text style={styles.normalText}>
            Develop your emotional intelligence with heinsight from the most
            experienced cousellor you know.
          </Text>
          <Text style={styles.normalText}>Yourself.</Text>
          <Button
            title="Begin your journey"
            color={'rgba(1000, 1000, 1000, 0.3)'}
            style={styles.buttonStyle}
            onPress={() => navigate('Login', Vibration.vibrate(1 * 100))}
          />
        </View>
        <StatusBar translucent backgroundColor="transparent" Text="white" />
      </ImageBackground>
    );
  }
}
