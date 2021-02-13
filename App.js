import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Components
import Home from './src/Home';
import Login from './src/Login';

// Create Stack Navigator for set routes
const Navigator = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
});

const App = createAppContainer(Navigator);

export default App;
