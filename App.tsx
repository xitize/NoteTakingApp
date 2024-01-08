import {SafeAreaProvider} from 'react-native-safe-area-context';
import Home from './src/screens/Home';

const App = () => {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
};
export default App;
