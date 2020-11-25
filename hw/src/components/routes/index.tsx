import React from 'react';
import useAuth from '../../hooks/useAuth';
import LoggedInNavigation from './LoggedInNavigation';
import NotLoggedInNavigation from './NotLoggedInNavigation';


export default function Routes() {
  const { getUser } = useAuth();
  const isLoggedIn = getUser() != null;
  return (
    isLoggedIn ? <LoggedInNavigation /> : <NotLoggedInNavigation />
  );
}

