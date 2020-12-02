import React from 'react';
import { useSelector } from 'react-redux';
import AppState from '../../models/store/appState';
import LoggedInNavigation from './LoggedInNavigation';
import NotLoggedInNavigation from './NotLoggedInNavigation';


export default function Routes() {
  const isLoggedIn = useSelector<AppState, boolean>(state => state.auth.user !== null);
  return (
    isLoggedIn ? <LoggedInNavigation /> : <NotLoggedInNavigation />
  );
}

