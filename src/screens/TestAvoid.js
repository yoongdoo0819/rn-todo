import { Keyboard, KeyboardAvoidingView, Pressable } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';
import Input, { KeyboardTypes, ReturnKeyTypes } from '../components/Input';

const TestAvoid = () => {
  return (
    <KeyboardAvoidingView style={styles.avoid} behavior={'height'}>
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={[styles.view, { backgroundColor: '#047857' }]}>
          <Image
            source={{
              uri: 'https://cdn-images-1.medium.com/max/1200/1*3tSS6q_D-lyttNdlRwqoQw.png',
            }}
            style={styles.image}
          ></Image>
        </View>
        <View style={[styles.view, { backgroundColor: '#0369a1' }]}>
          <Input
            title={'email'}
            placeholder={'your@email.com'}
            keyboardType={KeyboardTypes.EMAIL}
            returnKeyType={ReturnKeyTypes.NEXT}
          />
          <Input title={'password'} secureTextEntry></Input>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  avoid: { flex: 1 },
  view: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 200, height: 200 },
});

export default TestAvoid;
