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
          <Text style={styles.title}>What do you feel?</Text>
          <View style={styles.vertButtons}>
            <TouchableOpacity
              onPress={() => navigate('Location', Vibration.vibrate(1 * 100))}
            >
              <Text style={styles.customBtn}>Positive</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('Location', Vibration.vibrate(1 * 100))}
            >
              <Text style={styles.customBtn}>Angry</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.vertButtons}>
            <TouchableOpacity
              onPress={() => navigate('Location', Vibration.vibrate(1 * 100))}
            >
              <Text style={styles.customBtn}>Depressed</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('Location', Vibration.vibrate(1 * 100))}
            >
              <Text style={styles.customBtn}>Anxious</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.vertButtons}>
            <TouchableOpacity onPress={() => navigate('Location')}>
              <Text style={styles.customBtn}>Fear</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('Location')}>
              <Text style={styles.customBtn}>Frustration</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
