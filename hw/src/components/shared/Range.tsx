import React, { useState } from 'react';
import { GestureResponderEvent } from 'react-native';
import { LayoutChangeEvent, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import colors from '../../constants/colors';
import trimNumber from '../../helpers/trimNumber';

const buttonRadius = 30;

interface RangeProps {
  min: number;
  max: number;
  step: number;
  onChange: (val: number) => void;
  initialValue: number;
  leftColor?: string;
  rightColor?: string;
  style?: StyleProp<ViewStyle>
}

export default function Range({
  min,
  max,
  step,
  onChange,
  initialValue,
  rightColor = colors.colorPrimaryShade,
  leftColor = colors.colorOrange,
  style,
}: RangeProps) {

  const [rangeLength, setRangeLength] = useState<number>(0);
  const [buttonPosX, setButtonPosX] = useState<number>(0);
  const [rangeOffset, setRangeOffset] = useState<number>(0);

  const [leftLength, setLeftLength] = useState<number>(0);
  const [rightLength, setRightLength] = useState<number>(1);

  const [stepInPixels, setStepInPixels] = useState<number>(0);

  const onRangeLayoutRendered = (ev: LayoutChangeEvent) => {
    const offset = ev.nativeEvent.layout.x;
    setRangeOffset(offset);
    const width = ev.nativeEvent.layout.width;
    setRangeLength(width);
    const mappedStep = width / ((max - min) / step);
    setStepInPixels(mappedStep);
    const initialPosX = mappedStep * (initialValue - min) / step;
    onChangeVal(initialPosX, mappedStep, width);
  };

  const onChangeVal = (x: number, _stepInPixels: number = stepInPixels, _rangeLength: number = rangeLength) => {
    const trimmedX = trimNumber(Math.round(x / _stepInPixels) * _stepInPixels, 0, _rangeLength);
    if (buttonPosX !== trimmedX) {
      setButtonPosX(trimmedX);
      const currentLeftLength = trimmedX;
      const currentRightLength = _rangeLength - currentLeftLength;
      setLeftLength(currentLeftLength);
      setRightLength(currentRightLength);
    }
  };

  const onMove = (ev: GestureResponderEvent) => {
    const absolutePosX = ev.nativeEvent.touches[0].pageX;
    const relativePosX = absolutePosX - rangeOffset;
    const x = trimNumber(relativePosX + buttonRadius / 2, 0, rangeLength);
    onChangeVal(x);
  };

  return (
    <View style={[styles.container, style]} onLayout={onRangeLayoutRendered}
      onMoveShouldSetResponder={() => true} onResponderMove={onMove} >
      <View style={[getLineStyle(leftColor, leftLength)]} />
      <View style={[styles.button, getButtonPositionStyles(buttonPosX)]} />
      <View style={[getLineStyle(rightColor, rightLength)]}/>
    </View>
  );

};

const getLineStyle = (color: string, flex: number): StyleProp<ViewStyle> => ({
  backgroundColor: color, flex, height: 2,
});

const getButtonPositionStyles = (x: number): StyleProp<ViewStyle> => ({
  transform: [ { translateX: x - buttonRadius / 2 } ],
});

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    flexDirection: 'row',
    height: buttonRadius + 5,
    alignItems: 'center',
  },
  button: {
    width: buttonRadius,
    height: buttonRadius,
    borderRadius: buttonRadius,
    backgroundColor: colors.colorPrimary,
    position: 'absolute',
    zIndex: 1,
  },
  line: {
    height: 2,
    flex: 1,
  },
});
