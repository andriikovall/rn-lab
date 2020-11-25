import {
  ToastAndroid,
  Platform,
  Alert,
} from 'react-native';

const errorAlert = (title: string, message: string) => {
  if (Platform.OS === 'android') {
    const androidToastMessage = `${title}:\n ${message}`;
    ToastAndroid.show(androidToastMessage, ToastAndroid.LONG);
  } else {
    Alert.alert(title, message);
  }
};

export default errorAlert;
