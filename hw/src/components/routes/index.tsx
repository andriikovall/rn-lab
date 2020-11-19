import React from 'react';
import LoggedInNavigation from './LoggedInNavigation';
import NotLoggedInNavigation from './NotLoggedInNavigation';

interface RoutesProps {
  isLoggedIn: boolean;
}


export default function Routes({ isLoggedIn }: RoutesProps) {
  return (
    isLoggedIn ? <LoggedInNavigation /> : <NotLoggedInNavigation />
  );
}

