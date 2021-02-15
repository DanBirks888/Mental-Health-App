import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// Components
import Home from './src/Home';
import Login from './src/Login';
import DataOrCBT from './src/DataOrCBT';
import CarouselFeelings from './src/DocumentFeeling/CarouselFeelings';

// Create Stack Navigator for set routes
const Navigator = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  DataOrCBT: { screen: DataOrCBT },
  // Feeling: { screen: Feeling },
  CarouselFeelings: { screen: CarouselFeelings },
});

const App = createAppContainer(Navigator);

export default App;
