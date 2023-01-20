import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HeaderLeftButton = ({ canGoBack, tintColor }) => {
  const navigation = useNavigation();

  if (!canGoBack) {
    return null;
  }

  return (
    <Pressable onPress={navigation.goBack}>
      <MaterialCommunityIcons
        name="chevron-left"
        size={30}
        color={tintColor}
      ></MaterialCommunityIcons>
    </Pressable>
  );
};

export default HeaderLeftButton;
