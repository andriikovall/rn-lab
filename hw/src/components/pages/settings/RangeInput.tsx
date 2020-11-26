import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Range from '../../shared/Range';
import BorderBottom from '../../shared/BorderBottom';
import isFunction from '../../../helpers/isFunction';
import { AppText, AppTextSecondary } from '../../shared/Text';

interface RangeInputProps {
  label: string;
  units: ((val: number) => string) | string;
  min: number;
  max: number;
  step: number;
  initialValue?: number;
  onChange?: (val: number) => void;
}

export default function RangeInput({ units, label, min, max, step, initialValue, onChange }: RangeInputProps) {
  const [rangeVal, setRangeVal] = useState(initialValue || min);

  const unitsNameLabel: string = isFunction(units) ? (units as Function)(rangeVal) : units;
  const unitsLabel = `${rangeVal} ${unitsNameLabel}`;

  const upperCasedLabel = label?.toUpperCase();

  const onRangeValChange = (val: number) => {
    setRangeVal(val);
    if (onChange) {
      onChange(val);
    }
  };

  return (
    <BorderBottom style={styles.container}>
      <View style={styles.labelsContainer}>
        <AppTextSecondary style={styles.rangeLabel}>{upperCasedLabel}</AppTextSecondary>
        <View style={styles.rangeUnitsContainer}>
          <AppText>{unitsLabel}</AppText>
        </View>
      </View>
      <Range
        onChange={onRangeValChange}
        style={styles.rangeContainer}
        min={min}
        max={max}
        lineWidth={4}
        initialValue={initialValue}
        step={step}/>
    </BorderBottom>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
  },
  rangeContainer: {
    marginHorizontal: 10,
  },
  labelsContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  rangeLabel: {
    flex: 2,
  },
  rangeUnitsContainer: {
    alignItems: 'flex-end',
    flex: 1,
  },
});
