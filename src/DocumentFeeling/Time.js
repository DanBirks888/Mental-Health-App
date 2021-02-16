import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  Vibration,
} from 'react-native';
import styles from '../../assets/styleSheets';

export default class Time extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: () => null,
    };
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        source={require('../../assets/leavesBackground.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.pageContainer}>
          <Text style={styles.title}>When did this take place?</Text>
          <TouchableOpacity
            onPress={() => navigate('DataOrCBT', Vibration.vibrate(1 * 100))}
          >
            <Text style={styles.customBtn}>Morning</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('DataOrCBT', Vibration.vibrate(1 * 100))}
          >
            <Text style={styles.customBtn}>AfterNoon</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('DataOrCBT', Vibration.vibrate(1 * 100))}
          >
            <Text style={styles.customBtn}>Night</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
