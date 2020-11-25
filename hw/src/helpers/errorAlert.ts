import {
  ToastAndroid,
  Platform,
  Alert,
} from 'react-native';

const errorAlert = (title: string, message: string) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(`${title}: ${message}`, ToastAndroid.SHORT);
  } else {
    Alert.alert(title, message);
  }
};

export default errorAlert;
