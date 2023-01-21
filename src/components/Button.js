import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { PRIMARY, WHITE, GRAY, DANGER } from '../color';

export const ButtonTypes = {
  PRIMARY: 'PRIMARY',
  DANGER: 'DANGER',
};

const Button = ({ title, onPress, disabled, isLoading, buttonType }) => {
  const colors = { PRIMARY, DANGER };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: colors[buttonType].DEFAULT },
        pressed && { backgroundColor: colors[buttonType].DARK },
        disabled && { backgroundColor: colors[buttonType].LIGHT },
      ]}
    >
      {isLoading ? (
        <ActivityIndicator
          size={'small'}
          color={GRAY.DEFAULT}
        ></ActivityIndicator>
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </Pressable>
  );
};

Button.defaultProps = {
  buttonType: ButtonTypes.PRIMARY,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY.DEFAULT,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    color: WHITE,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default Button;
