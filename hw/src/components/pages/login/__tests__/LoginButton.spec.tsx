import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import LoginButton from '../LoginButton';

test('should match the snapshot', () => {
  const { toJSON } = render(<LoginButton onPress={() => { }} title="some title" />);
  expect(toJSON()).toMatchSnapshot();
});

test('Should call onPress callback', () => {
  const onPress = jest.fn();
  const onPressArg = 'some arg';
  const { getByTestId } = render(<LoginButton onPress={onPress} title="anyTitle"/>);
  fireEvent(getByTestId('LoginButton.TouchableHighlight'), 'press', onPressArg);
  expect(onPress).toHaveBeenCalled();
  expect(onPress).toHaveBeenCalledWith(onPressArg);
});

test('Should have uppercased title', () => {
  const sampleTitles = [
    'title', 'TITLE', 'tIt Le', 'SoMeThInG VeIrD', '',
  ];
  sampleTitles.forEach((title) => {
    const { getByTestId } = render(<LoginButton onPress={() => {}} title={title}/>);
    const buttonTitle = getByTestId('LoginButton.Text')?.children[0]?.toString();
    expect(buttonTitle).toEqual(title.toUpperCase());
    // the only one case when upperCase !== lowerCase
    if (title !== '') {
      expect(buttonTitle).not.toEqual(title.toLowerCase());
    }
  });
});
