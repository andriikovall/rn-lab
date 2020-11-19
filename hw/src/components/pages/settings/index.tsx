import React, { Component } from 'react';
import Range from '../../shared/Range';
import UserDataForm from './UserDataFrom';

interface SettingsProps {
}

interface SettingsState {
}

export default class Settings extends Component<SettingsProps, SettingsState> {
  constructor(props: SettingsProps) {
    super(props);
    this.onRangeChange = this.onRangeChange.bind(this);
  }

  onRangeChange(num: number) {
    console.log('num:', num);
  }

  render() {
    return (
      <>
        <UserDataForm />
        <Range min={1} max={6} step={1} onChange={() => {}} initialValue={0} />
      </>
    );
  }
}
