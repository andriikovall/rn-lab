import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import RangeInput from './RangeInput';
import UserDataForm from './UserDataFrom';
import pluralize from 'pluralize';
import TemperatureUnitsInput from './TemperatureUnitsInput';
import TemperatureUnit from '../../../enums/temperatureUnits';

interface SettingsProps {
}

interface SettingsState {
}

export default class Settings extends Component<SettingsProps, SettingsState> {
  constructor(props: SettingsProps) {
    super(props);
    this.pluralizeDays = this.pluralizeDays.bind(this);
  }

  pluralizeDays(val: number) {
    return pluralize('days', val);
  }

  render() {
    return (
      <ScrollView>
        <UserDataForm />
        <RangeInput
          min={1}
          max={10}
          units={this.pluralizeDays}
          label="Show weather for"
          step={1} initialValue={5} />

        <RangeInput
          min={5}
          max={60}
          units="min"
          label="Update weather every"
          step={5} initialValue={15} />

        <TemperatureUnitsInput initialValue={TemperatureUnit.UNIT_CELSIUS} onChange={() => {}}/>

      </ScrollView>
    );
  }
}
