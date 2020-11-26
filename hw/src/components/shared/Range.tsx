import React, { useState } from 'react';
import { GestureResponderEvent } from 'react-native';
import { LayoutChangeEvent, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import colors from '../../constants/colors';
import trimNumber from '../../helpers/trimNumber';
import { useDebounce } from '../../hooks/useDebounce';

export interface RangeProps {
  min: number;
  max: number;
  step: number;
  onChange?: (val: number) => void;
  initialValue?: number;
  buttonRadius?: number;
  buttonColor?: string;
  leftColor?: string;
  rightColor?: string;
  lineWidth?: number;
  style?: StyleProp<ViewStyle>
}

export default function Range({
  min,
  max,
  step,
  lineWidth = 4,
  onChange = () => { },
  initialValue = min,
  rightColor = colors.colorPrimaryShade,
  leftColor = colors.colorOrange,
  buttonRadius = 30,
  buttonColor = colors.colorPrimary,
  style,
}: RangeProps) {

  const [rangeLength, setRangeLength] = useState<number>(0);
  const [buttonPosX, setButtonPosX] = useState<number>(0);
  const [rangeOffset, setRangeOffset] = useState<number>(0);

  const [leftLength, setLeftLength] = useState<number>(0);
  const [rightLength, setRightLength] = useState<number>(1);

  const [stepInPixels, setStepInPixels] = useState<number>(0);

  const debounce = useDebounce(35);

  const onRangeLayoutRendered = (ev: LayoutChangeEvent) => {
    const offset = ev.nativeEvent.layout.x;
    setRangeOffset(offset);
    const width = ev.nativeEvent.layout.width;
    setRangeLength(width);
    const mappedStep = width / ((max - min) / step);
    setStepInPixels(mappedStep);
    const initialPosX = mappedStep * (initialValue - min) / step;
    onChangeInternal(initialPosX, mappedStep, width);
  };

  const onChangeInternal = (x: number, _stepInPixels: number = stepInPixels, _rangeLength: number = rangeLength) => {
    const trimmedX = trimNumber(Math.round(x / _stepInPixels) * _stepInPixels, 0, _rangeLength);
    if (buttonPosX !== trimmedX) {
      setButtonPosX(trimmedX);
      const currentLeftLength = trimmedX;
      const currentRightLength = _rangeLength - currentLeftLength;
      setLeftLength(currentLeftLength);
      setRightLength(currentRightLength);
      const stepNumber = trimmedX / _stepInPixels;
      const currentVal = min + stepNumber * step;
      debounce(() => {
        onChange(currentVal);
      });
    }
  };

  const onMove = (ev: GestureResponderEvent) => {
    const absolutePosX = ev.nativeEvent.touches[0].pageX;
    const relativePosX = absolutePosX - rangeOffset;
    const x = trimNumber(relativePosX, 0, rangeLength);
    onChangeInternal(x);
  };

  return (
    <View style={[styles.container, getContainerStyle(buttonRadius), style]} onLayout={onRangeLayoutRendered}
      onMoveShouldSetResponder={() => true} onResponderMove={onMove} >
      <View style={getLineStyle(leftColor, leftLength, lineWidth)} />
      <View style={[
        styles.button,
        getButtonStyles(buttonRadius, buttonColor),
        getButtonPositionStyles(buttonPosX, buttonRadius),
      ]} />
      <View style={getLineStyle(rightColor, rightLength, lineWidth)} />
    </View>
  );

};

const getContainerStyle = (radius: number): StyleProp<ViewStyle> => ({
  height: radius + 5,
  marginHorizontal: radius / 2 + 10,
});

const getButtonStyles = (radius: number, color: string): StyleProp<ViewStyle> => ({
  width: radius,
  height: radius,
  borderRadius: radius,
  backgroundColor: color,
});

const getLineStyle = (color: string, flex: number, lineWidth: number): StyleProp<ViewStyle> => ({
  backgroundColor: color, flex, height: lineWidth,
});

const getButtonPositionStyles = (x: number, radius: number): StyleProp<ViewStyle> => ({
  transform: [{ translateX: x - radius / 2 }],
});


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    zIndex: 1,
  },
});
