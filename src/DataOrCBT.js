import React from 'react';
import {
  View,
  Button,
  Image,
  ImageBackground,
  StatusBar,
  Text,
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
          <Button
            title="Document a feeling"
            color={'rgba(1000, 1000, 1000, 0.3)'}
            styles={styles.buttonStyle}
            onPress={() => navigate('DataOrCBT')}
          />
          <Button
            title="Emotional Visualisations"
            color={'rgba(1000, 1000, 1000, 0.3)'}
            styles={styles.buttonStyle}
            onPress={() => navigate('DataOrCBT')}
          />
        </View>
      </ImageBackground>
    );
  }
}
