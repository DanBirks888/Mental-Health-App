import React from 'react';
import styles from '../assets/styleSheets';
import { piccy } from '../assets/images';
import {
  Image,
  View,
  Text,
  TextInput,
  ImageBackground,
  Button,
  StatusBar,
} from 'react-native';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
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
          <Image
            source={require('../assets/brainLogoBlue.png')}
            style={styles.logo}
          />
          <Text style={styles.normalText}>Log In</Text>
          <View style={styles.loginInfo}>
            <TextInput
              placeholder="Name"
              placeholderTextColor="white"
              value={this.state.name}
              onChangeText={(name) => this.setState({ name })}
              style={styles.input}
            />
          </View>
          <View style={styles.loginInfo}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="white"
              style={styles.input}
            />
          </View>
          <View style={styles.loginInfo}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="white"
              style={styles.input}
            />
          </View>
          <Button
            title="confirm"
            color={'rgba(1000, 1000, 1000, 0.3)'}
            styles={styles.buttonStyle}
            onPress={() => navigate('DataOrCBT', { user: this.state.name })}
          />
        </View>
        <StatusBar translucent backgroundColor="transparent" Text="white" />
      </ImageBackground>
    );
  }
}
