import { Alert } from 'react-native';

const alert = (title: string, message: string) => {
  return Alert.alert(title, message);
};

export default alert;

