import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import Input, {
  KeyboardTypes,
  ReturnKeyTypes,
  IconNames,
} from '../components/Input';
import { Keyboard, KeyboardAvoidingView, Pressable } from 'react-native';
import SafeInputView from '../components/SafeInuptView';
import { useState, useRef } from 'react';
import Button from '../components/Button';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const [disabled, setDisabled] = useState(false);

  const onSubmit = () => {
    if (!disabled) {
      Keyboard.dismiss();
      console.log('onSubmit');
    }
  };

  return (
    <SafeInputView>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://cdn-images-1.medium.com/max/1200/1*3tSS6q_D-lyttNdlRwqoQw.png',
          }}
          style={styles.image}
        ></Image>

        <Input
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
          title={'email'}
          placeholder={'your@email.com'}
          keyboardType={KeyboardTypes.EMAIL}
          returnKeyType={ReturnKeyTypes.NEXT}
          iconName={IconNames.EMAIL}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          ref={passwordRef}
          value={password}
          onChangeText={(text) => setPassword(text.trim())}
          title={'password'}
          secureTextEntry
          iconName={IconNames.PASSWORD}
          onSubmitEditing={onSubmit}
        ></Input>
        <View style={styles.buttonContainer}>
          <Button
            title={'LOGIN'}
            onPress={onSubmit}
            disabled={disabled}
          ></Button>
        </View>
      </View>
    </SafeInputView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  avoid: {
    flex: 1,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default SignInScreen;
