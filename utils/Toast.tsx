import Toast from 'react-native-toast-message';

const showToast = (type: any, text1: any, text2?: any) => {
  Toast.show({
    topOffset: 20,
    type: type,
    text1: text1,
    // text1: splitString(text1),
    text2: text2,
    visibilityTime: 2500,
  });
};

export default showToast;
