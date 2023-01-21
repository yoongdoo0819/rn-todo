import { useContext } from 'react';
import UserContext, { useUserContext } from '../contexts/UserContext';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { NavigationContainer } from '@react-navigation/native';

const Navigation = () => {
  const { user } = useUserContext();

  return (
    <NavigationContainer>
      {user ? <MainStack /> : <AuthStack /*setUser={setUser}*/ />}
    </NavigationContainer>
  );
};

export default Navigation;
