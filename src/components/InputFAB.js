import {
  Animated,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { BLACK, PRIMARY, WHITE } from '../color';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRef, useState } from 'react';

const BUTTON_WIDTH = 60;

const InputFAB = () => {
  const [text, setText] = useState('');
  const [isOpened, setIsOpened] = useState(false);
  const inputRef = useRef(null);
  const windowWidth = useWindowDimensions().width;
  const inputWidth = useRef(new Animated.Value(BUTTON_WIDTH)).current;

  const open = () => {
    setIsOpened(true);
    Animated.timing(inputWidth, {
      toValue: windowWidth - 20,
      useNativeDriver: false,
      duration: 300,
    }).start(() => {
      inputRef.current.focus();
    });
  };

  const close = () => {
    setIsOpened(false);
    Animated.timing(inputWidth, {
      toValue: BUTTON_WIDTH,
      useNativeDriver: false,
      duration: 300,
    }).start(() => {
      inputRef.current.blur();
    });
  };

  const onPressButton = () => (isOpened ? close() : open());

  return (
    <>
      <Animated.View
        style={[styles.container, styles.shadow, { width: inputWidth }]}
      >
        <TextInput
          ref={inputRef}
          value={text}
          onChangeText={setText}
          style={styles.input}
          autoCapitalize={'none'}
          autoCorrect={false}
          textContentType={'none'}
          keyboardAppearance={'light'}
          returnKeyType={'done'}
          onBlur={close}
        ></TextInput>
      </Animated.View>

      <Pressable
        onPress={onPressButton}
        style={({ pressed }) => [
          styles.container,
          pressed && { backgroundColor: PRIMARY.DARK },
        ]}
      >
        <MaterialCommunityIcons
          name="plus"
          size={24}
          color={WHITE}
        ></MaterialCommunityIcons>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    right: 10,
    width: BUTTON_WIDTH,
    height: BUTTON_WIDTH,
    borderRadius: BUTTON_WIDTH / 2,
    backgroundColor: PRIMARY.DEFAULT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: WHITE,
    paddingLeft: 20,
    paddingRight: BUTTON_WIDTH + 10,
  },
  shadow: {
    shadowColor: BLACK,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: { elevation: 10 },
    }),
  },
});

export default InputFAB;
