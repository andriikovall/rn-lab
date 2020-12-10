import React, { useEffect } from 'react';
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

interface NotificationsHandlerProps {
  children: any;
}

export default function NotificationsHandler({ children }: NotificationsHandlerProps) {
  useEffect(() => {
    const unsubscribe = messaging().onMessage((_message: FirebaseMessagingTypes.RemoteMessage) => {
      // this will be called when the app is opened in the foreground

      // it's not ok to navigate when application is opened, so I will
      // leave this clear for possible future handling
    });

    return unsubscribe;
  }, []);

  return (
    <>
      {children}
    </>
  );
}
