import SettingsState from '../states/settingsState';
import { UPDATE_SETTINGS } from './../../../store/actionTypes/settings';
import { Action } from './action';

export type UpdateSettingsAction = Action<typeof UPDATE_SETTINGS, Partial<SettingsState>>;

export type SettingsActionTypes = UpdateSettingsAction;
