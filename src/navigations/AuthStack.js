//import { createNativeStackNavigator } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import ListScreen from '../screens/ListScreen';
import { WHITE } from '../color';
import { Pressable, Text } from 'react-native';
import { PRIMARY } from '../color';
import HeaderLeftButton from '../components/HeaderLeftButton';
import HeaderRightButton from '../components/HeaderRightButton';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerTitleAlign: 'center',
        headerTintColor: PRIMARY.DEFAULT,
        headerTitleStyle: {
          fontWeight: '700',
        },
        title: 'TODO List',
        headerBackTitleVisible: false,
        headerLeft: HeaderLeftButton,
      }}
    >
      <Stack.Screen name={'Home'} component={SignInScreen} />
      <Stack.Screen
        name={'List'}
        component={ListScreen}
        options={{
          title: 'TODO List',
          contentStyle: {
            backgroundColor: 'lavender',
            borderRadius: 30,
          },
          headerRight: HeaderRightButton,
        }}
      />
      <Stack.Screen name={'Settings'} component={SettingsScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
