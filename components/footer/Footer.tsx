import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Footer = () => {
  const { width, height } = useWindowDimensions();
  let imageSize = 25;
  if (width < 380) {
    imageSize = 20;
  }
  if (height < 400) {
    imageSize = 15;
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <View style={styles.footer}>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image
          style={styles.image}
          source={require('../../assets/images/logo-circle.png')}
        />
      </View>
      <Text>LGED Attendance</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'lightgray',
    padding: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageContainer: {
    marginRight: 4,
    borderWidth: 2,
    borderColor: '#077113',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Footer;
