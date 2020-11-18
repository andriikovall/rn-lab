import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../../../constants/colors';
import TemperatureUnit, { getAllUnitsTitles, TemperatureUnitWithTitle } from '../../../enums/temperatureUnits';
import { AppText, AppTextSecondary } from '../../shared/Text';

interface TemperatureUnitsInputProps {
  onChange: (units: TemperatureUnit) => void;
  initialValue: TemperatureUnit;
}

export default function TemperatureUnitsInput({ initialValue, onChange }: TemperatureUnitsInputProps) {
  const [allUnits] =
    useState<TemperatureUnitWithTitle[]>(getAllUnitsTitles());

  const [checkedEnum, setCheckedEnum] = useState<TemperatureUnit>(initialValue);

  const onUnitPress = ({ unit }: TemperatureUnitWithTitle) => {
    setCheckedEnum(unit);
    onChange(unit);
  };

  return (
    <View style={styles.container}>
      {allUnits.map((unit: TemperatureUnitWithTitle, index: number) => (
        <UnitInputItem
          key={index}
          unit={unit}
          shouldHaveRightBorder={index < allUnits.length - 1}
          checked={unit.unit === checkedEnum}
          onPress={onUnitPress} />
      ))}
    </View>
  );
}

interface UnitInputItemProps {
  unit: TemperatureUnitWithTitle
  shouldHaveRightBorder: boolean;
  onPress: (unit: TemperatureUnitWithTitle) => void;
  checked: boolean;
};

function UnitInputItem({ unit, shouldHaveRightBorder, onPress, checked }: UnitInputItemProps) {
  return (
    <TouchableWithoutFeedback onPress={() => onPress(unit)}
      style={[styles.unitItem, shouldHaveRightBorder && styles.rightItemBorder]}>
      {checked
        ? <AppText size={35}>{unit.title}</AppText>
        : <AppTextSecondary size={35}>{unit.title}</AppTextSecondary>}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 25,
  },
  unitItem: {
    paddingHorizontal: 10,
  },
  rightItemBorder: {
    borderRightColor: colors.colorSecondary,
    borderRightWidth: 2,
  },
});
