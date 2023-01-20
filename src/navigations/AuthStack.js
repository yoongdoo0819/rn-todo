//import { createNativeStackNavigator } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import ListScreen from '../screens/ListScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={'SignIn'}>
      <Stack.Screen name={'SignIn'} component={SignInScreen} />
      <Stack.Screen name={'List'} component={ListScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
