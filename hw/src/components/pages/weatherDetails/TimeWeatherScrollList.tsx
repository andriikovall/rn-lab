import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ScrollView } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import ShortWeather from '../../../models/shortWeather';
import TimeWeather from './TimeWeather';

interface TimeWeatherScrollListProps {
  items: { time: number; weather: ShortWeather }[];
}

export default function TimeWeatherScrollList({ items }: TimeWeatherScrollListProps) {
  return (
    <ScrollView horizontal={true} indicatorStyle={'white'} >
      {items?.map((item, index) =>
        <TimeWeather key={index} weather={item.weather} time={item.time} />)}
    </ScrollView>
  );
}
