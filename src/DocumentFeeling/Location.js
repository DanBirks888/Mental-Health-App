import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  Vibration,
} from 'react-native';
import styles from '../../assets/styleSheets';

export default class Feeling extends React.Component {
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
          <Text style={styles.title}>Where did this occur?</Text>
          <View style={styles.vertButtons}>
            <TouchableOpacity
              onPress={() => navigate('Time', Vibration.vibrate(1 * 100))}
            >
              <Text style={styles.customBtn}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('Time', Vibration.vibrate(1 * 100))}
            >
              <Text style={styles.customBtn}>Work</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.vertButtons}>
            <TouchableOpacity
              onPress={() => navigate('Time', Vibration.vibrate(1 * 100))}
            >
              <Text style={styles.customBtn}>Recreation</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('Time', Vibration.vibrate(1 * 100))}
            >
              <Text style={styles.customBtn}>Time</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.vertButtons}>
            <TouchableOpacity
              onPress={() => navigate('Time', Vibration.vibrate(1 * 100))}
            >
              <Text style={styles.customBtn}>Shopping</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('Time', Vibration.vibrate(1 * 100))}
            >
              <Text style={styles.customBtn}>Exercising</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
