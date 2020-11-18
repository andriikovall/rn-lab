import React, { useState } from 'react';
import { LayoutChangeEvent, LayoutRectangle, StyleSheet, View } from 'react-native';
import ShortDayWeather from '../../../models/shortDayWeather';
import moment from 'moment';
import WeatherIcon from '../../shared/WeatherIcon';
import { AppText } from '../../shared/Text';
import colors from '../../../constants/colors';
import textToTemperature from '../../../helpers/textToTemperature';
import floatsEqual from '../../../helpers/floatsEqual';
import BorderBottom from '../../shared/BorderBottom';

interface DayItemProps {
  item: ShortDayWeather;
  minTemperature: number;
  maxTemperature: number;
}

export default function DayItem({ item, minTemperature, maxTemperature }: DayItemProps) {
  const dayName = getDayName(new Date(item.date));
  const dayTemperatureFromText = textToTemperature(item.temperatureFrom.toString());
  const dayTemperatureToText = textToTemperature(item.temperatureTo.toString());

  const [barWidth, setBarWidth] = useState<number>(10);
  const [leftWidth, setLeftWidth] = useState<number>(1);
  const [rightWidth, setRightWidth] = useState<number>(1);

  const onBarLayoutRendered = (ev: LayoutChangeEvent) => {
    const layout: LayoutRectangle = ev.nativeEvent.layout;
    const maxLength = maxTemperature - minTemperature;
    const newWidth = ((item.temperatureTo - item.temperatureFrom) / maxLength) * layout.width;
    const newLeftWidth = ((item.temperatureFrom - minTemperature) / maxLength) * layout.width;
    const newRightWidth = layout.width - newWidth - newLeftWidth;

    const temperatureTextApproximateWidth = 50;
    if (!floatsEqual(newWidth, barWidth)) {
      setBarWidth(newWidth + temperatureTextApproximateWidth);
    }
    if (!floatsEqual(newLeftWidth, leftWidth)) {
      setLeftWidth(newLeftWidth - temperatureTextApproximateWidth / 2);
    }
    if (!floatsEqual(newRightWidth, rightWidth)) {
      setRightWidth(newRightWidth - temperatureTextApproximateWidth / 2);
    }
  };

  return (
    <BorderBottom style={styles.container}>
      <AppText style={styles.dayName}>{dayName.toUpperCase()}</AppText>
      <View style={styles.weatherStateIconContainer}>
        <WeatherIcon state={item.weatherState} size={20} />
      </View>
      <View style={styles.temperatureBarContainer} onLayout={onBarLayoutRendered}>

        <View style={safeGetStyleFlex(leftWidth)} />

        <View style={[styles.barWithTextWrapper, safeGetStyleFlex(barWidth)]}>
          <View>
            <AppText style={[styles.temperatureText]}
            >{dayTemperatureFromText}</AppText>
          </View>
          <View style={[styles.temperatureBar]} />
          <View>
            <AppText style={styles.temperatureText}
            >{dayTemperatureToText}</AppText>
          </View>
        </View>

        <View style={safeGetStyleFlex(rightWidth)} />

      </View>
    </BorderBottom>
  );
}

const safeGetStyleFlex = (value: number): { flex: number } | null => {
  return value ? { flex: value } : null;
};

const getDayName = (date: Date): string => {
  const now = new Date(Date.now());
  const isToday = now.getDate() === date.getDate() &&
    now.getDay() === date.getDay() &&
    now.getMonth() === date.getMonth();
  return isToday ? 'Today' : moment(date).format('ddd');
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 25,
    marginHorizontal: 15,
  },
  dayName: {
    flex: 2,
  },
  weatherStateIconContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  temperatureBarContainer: {
    flex: 7,
    flexDirection: 'row',
  },
  temperatureBar: {
    flex: 14,
    backgroundColor: colors.colorPrimary,
    height: '70%',
    borderRadius: 20,
    marginHorizontal: 5,
    alignSelf: 'center',
  },
  temperatureText: {
    flex: 10,
  },
  barWithTextWrapper: {
    flexDirection: 'row',
    flex: 1,
  },
});
