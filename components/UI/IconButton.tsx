import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface IIconButtonProps {
  icon: any;
  size: any;
  color: any;
  onPress: () => void;
}

const IconButton: React.FunctionComponent<IIconButtonProps> = ({
  icon,
  size,
  color,
  onPress,
}) => {
  return (
    <Pressable
      style={(pressed) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    marginTop: Platform.OS === 'ios' ? 0 : 8,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    // opacity: 0.7,
  },
});
