import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// Components
import Home from './src/Home';
import Login from './src/Login';
import DataOrCBT from './src/DataOrCBT';
import Feeling from './src/DocumentFeeling/Feeling';

// Create Stack Navigator for set routes
const Navigator = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  DataOrCBT: { screen: DataOrCBT },
  Feeling: { screen: Feeling },
});

const App = createAppContainer(Navigator);

export default App;
