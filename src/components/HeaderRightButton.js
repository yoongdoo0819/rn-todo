import { Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HeaderRightButton = ({ tintColor }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('Settings')} hitSlop={10}>
      {/* {() => navigation.navigate('Settings')} hitSlop={10}> */}
      <MaterialCommunityIcons
        name="cog"
        size={20}
        color={tintColor}
      ></MaterialCommunityIcons>
    </Pressable>
  );
};

export default HeaderRightButton;
