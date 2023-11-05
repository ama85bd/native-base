import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';

interface IOutlineButtonProps {
  direction: any;
  backgroundColor: any;
  icon?: any;
  iconLink?: any;
  children: any;
  isButtonPressed?: boolean;
  onPress: () => void;
}

const OutlineButton: React.FunctionComponent<IOutlineButtonProps> = ({
  icon,
  onPress,
  children,
  isButtonPressed,
  direction,
  backgroundColor,
  iconLink,
}) => {
  return (
    <Pressable
      style={[
        styles.button,
        isButtonPressed && styles.pressed,
        { backgroundColor: backgroundColor, borderColor: backgroundColor },
      ]}
      onPress={onPress}
    >
      {direction === 'left' &&
        (iconLink ? (
          iconLink
        ) : (
          <Ionicons
            style={[styles.icon, { marginRight: 8, marginLeft: 0 }]}
            name={icon}
            size={18}
            color={Colors.primary500}
          />
        ))}
      <Text style={styles.text}>{children}</Text>
      {direction === 'right' &&
        (iconLink ? (
          iconLink
        ) : (
          <Ionicons
            style={styles.icon}
            name={icon}
            size={18}
            color={Colors.primary500}
          />
        ))}
    </Pressable>
  );
};

export default OutlineButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    // borderColor: '#9C27B0',
    // backgroundColor: '#fc42d1',
    borderRadius: 4,
  },
  pressed: {
    opacity: 1,
  },
  icon: {
    marginLeft: 10,
    color: 'white',
    marginTop: 2,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    // marginLeft: 5,
    // marginRight: 5,
  },
});
