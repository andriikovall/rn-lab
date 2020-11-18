import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../constants/colors';


// i don't know what Page's type is =(
export default function wrapPage(Page: any) {
  return class Wrapped extends Component {
    render() {
      return (
        <View style={styles.wrapper}>
          <Page />
        </View>
      );
    }
  };
}


const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.colorBg,
    flex: 1,
  },
});

