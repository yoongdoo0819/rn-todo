import { StatusBar } from 'expo-status-bar';
import SignInScreen from './screens/SignInScreen';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigations/AuthStack';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <AuthStack></AuthStack>
      {/* <TestAvoid></TestAvoid> */}
    </NavigationContainer>
  );
};

export default App;
