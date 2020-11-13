import React, { useState } from 'react';
import { LayoutChangeEvent, LayoutRectangle, StyleSheet, View } from 'react-native';
import ShortDayWeather from '../../../models/shortDayWeather';
import moment from 'moment';
import WeatherIcon from '../../shared/WeatherIcon';
import { AppText } from '../../shared/Text';
import sharedStyles from '../../../helpers/styles';
import colors from '../../../helpers/colors';
import textToTemperature from '../../../helpers/textToTemperature';
import floatsEqual from '../../../helpers/floatsEqual';

interface DayItemProps {
  item: ShortDayWeather;
  minTemperature: number;
  maxTemperature: number;
}

export default function DayItem({ item, minTemperature, maxTemperature }: DayItemProps) {
  const dayName = getDayName(new Date(item.date));

  const [barWidth, setBarWidth] = useState<number>(10);
  const [leftWidth, setLeftWidth] = useState<number>(1);
  const [rightWidth, setRightWidth] = useState<number>(1);

  const onBarLayoutRendered = (ev: LayoutChangeEvent) => {
    const layout: LayoutRectangle = ev.nativeEvent.layout;
    const maxLength = maxTemperature - minTemperature;
    const newWidth = ((item.temperatureTo - item.temperatureFrom) / maxLength) * layout.width;
    const newLeftWidth = ((item.temperatureFrom - minTemperature) / maxLength) * layout.width;
    const newRightWidth = layout.width - newWidth - newLeftWidth;
    if (!floatsEqual(newWidth, barWidth)) {
      setBarWidth(newWidth);
    }
    if (!floatsEqual(newLeftWidth, leftWidth)) {
      setLeftWidth(newLeftWidth);
    }
    if (!floatsEqual(newRightWidth, rightWidth)) {
      setRightWidth(newRightWidth);
    }
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.dayName}>{dayName.toUpperCase()}</AppText>
      <View style={styles.weatherStateIconContainer}>
        <WeatherIcon state={item.weatherState} size={20} />
      </View>
      <View style={styles.temperatureBarContainer} onLayout={onBarLayoutRendered}>

        <View style={safeGetStyleFlex(leftWidth)} />

        <View style={[styles.barWithTextWrapper, safeGetStyleFlex(barWidth)]}>
          <View>
            <AppText style={[styles.temperatureText]}
            >{textToTemperature(item.temperatureFrom.toString())}</AppText>
          </View>
          <View style={[styles.temperatureBar]} />
          <View>
            <AppText style={styles.temperatureText}
            >{textToTemperature(item.temperatureTo.toString())}</AppText>
          </View>
        </View>

        <View style={safeGetStyleFlex(rightWidth)} />

      </View>
    </View>
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
    ...sharedStyles.bottomDivider,
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
  temperatureTextFromContainer: {
    flexDirection: 'row',
    flex: 1,
    padding: 0,
  },
  barWithTextWrapper: {
    flexDirection: 'row',
    flex: 1,
  },
});
