import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 20,
    justifyContent: 'center',
    paddingVertical: 30,
    // made this to render tabItem with no icon
    transform: [{ translateX: -15 }],
  },
  tabBar: {
    height: 60,
    backgroundColor: colors.colorBg,
    borderTopWidth: 0,
  },
  headerIcon: {
    paddingHorizontal: 8,
  },
});

export default styles;
