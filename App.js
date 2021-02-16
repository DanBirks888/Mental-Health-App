import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// Components
import Home from './src/Home';
import Login from './src/Login';
import DataOrCBT from './src/DataOrCBT';
import Time from './src/DocumentFeeling/Time';
import Feeling from './src/DocumentFeeling/Feeling';
import Location from './src/DocumentFeeling/Location';
import VisualisationHome from './src/Visualisations/VisualisationHome';

// Create Stack Navigator for set routes
const Navigator = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  DataOrCBT: { screen: DataOrCBT },
  Feeling: { screen: Feeling },
  Location: { screen: Location },
  Time: { screen: Time },
  VisualisationHome: { screen: VisualisationHome },
});

const App = createAppContainer(Navigator);

export default App;
