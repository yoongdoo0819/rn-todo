import { Image, StyleSheet, Text, View } from 'react-native';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn-images-1.medium.com/max/1200/1*3tSS6q_D-lyttNdlRwqoQw.png',
        }}
        style={styles.image}
      ></Image>
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
