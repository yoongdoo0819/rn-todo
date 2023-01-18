import { Image, StyleSheet, Text, View } from 'react-native';
import Input from '../components/Input';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn-images-1.medium.com/max/1200/1*3tSS6q_D-lyttNdlRwqoQw.png',
        }}
        style={styles.image}
      ></Image>

      <Input title={'email'} placeholder={'your@email.com'} />
      <Input title={'password'} placeholder={''}></Input>
    </View>
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
});

export default SignInScreen;
