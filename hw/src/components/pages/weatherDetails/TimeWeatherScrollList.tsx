import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ShortWeather from '../../../models/shortWeather';
import TimeWeather from './TimeWeather';

interface TimeWeatherScrollListProps {
  items: { time: number; weather: ShortWeather }[];
}

export default function TimeWeatherScrollList({ items }: TimeWeatherScrollListProps) {
  return (
    <View style={styles.container} >
      <ScrollView horizontal={true} indicatorStyle={'white'} >
        {/* can give index as a key because we do not modify this list */}
        {items?.map((item, index) =>
          <TimeWeather key={index} weather={item.weather} time={item.time} />)}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {

  },
});
