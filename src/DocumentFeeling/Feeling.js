import React from 'react';
import { TouchableOpacity, View, Text, ImageBackground } from 'react-native';
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
          <TouchableOpacity onPress={() => navigate('Event')}>
            <Text style={styles.customBtn}>Anxious</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
