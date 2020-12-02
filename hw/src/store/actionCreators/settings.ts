import { UPDATE_SETTINGS } from './../actionTypes/settings';
import { UpdateSettingsAction } from './../../models/store/actions/settingsActions';
import SettingsState from '../../models/store/states/settingsState';

export const updateSettings = (settings: Partial<SettingsState>): UpdateSettingsAction => ({
  type: UPDATE_SETTINGS,
  payload: settings,
});
