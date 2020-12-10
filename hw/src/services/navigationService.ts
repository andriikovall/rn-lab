import { NavigationContainerRef } from '@react-navigation/native';
import { createRef, RefObject } from 'react';

class NavigationService {
  public navigationRef: RefObject<NavigationContainerRef> | null | undefined;

  constructor() {
    this.navigationRef = createRef<NavigationContainerRef>();
  }

  public navigate(route: string, data: any = {}) {
    if (route == null) {
      return;
    }
    if (this.navigationRef?.current == null) {
      // @todo ask how to handle this
    } else {
      this.navigationRef?.current?.navigate(route, data);
    }
  }
}

export default new NavigationService();
