import { Alert, Image, StyleSheet, View } from 'react-native';
import Input, {
  KeyboardTypes,
  ReturnKeyTypes,
  IconNames,
} from '../components/Input';
import { Keyboard } from 'react-native';
import SafeInputView from '../components/SafeInuptView';
import { useState, useRef, useEffect } from 'react';
import Button from '../components/Button';
import { signIn } from '../api/auth';
import { useUserContext } from '../contexts/UserContext';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const { setUser } = useUserContext();

  /*
   * useEffect 예시 always or mount(only one time) or email 값에 따라
  useEffect(() => {
    console.log(`always : ${email} ${password}`);
  }); // always
  useEffect(() => {
    console.log(`mount : ${email} ${password}`);
  }, []); // mount
  useEffect(() => {
    console.log(`email : ${email} ${password}`);
  }, [email]); // email
  */

  /* setOptions 사용 예시
  useEffect(() => {
    navigation.setOptions({
      contentStyle: {
        backgroundColor: email ? 'skyblue' : 'lightgray',
      },
    });
  }, [navigation, email]);
  */

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = async () => {
    if (!disabled && !isLoading) {
      Keyboard.dismiss();
      setIsLoading(true);
      try {
        const data = await signIn(email, password);
        console.log(data);
        setIsLoading(false);
        /*
        Alert.alert('Login Success', data, [
          {
            onPress: () => setIsLoading(false),
          },
        ]);
*/
        //navigation.navigate('List');
        setUser(data);
      } catch (e) {
        Alert.alert('Login Failed', e, [
          {
            text: 'default',
            onPress: () => setIsLoading(false),
            style: 'default',
          },
          {
            text: 'cancel',
            onPress: () => setIsLoading(false),
            style: 'cancel',
          },
          {
            text: 'done',
            onPress: () => setIsLoading(false),
            style: 'destructive',
          },
        ]);
      }
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
            isLoading={isLoading}
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
