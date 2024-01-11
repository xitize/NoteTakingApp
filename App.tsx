import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigation from './src/navigation/StackNavigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <MainNavigation />
    </SafeAreaProvider>
  );
};

export default App;
