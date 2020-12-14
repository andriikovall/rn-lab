import React, { Component } from 'react';
import errorAlert from '../../helpers/errorAlert';

interface SharedErrorBoundaryProps {
  children?: any;
}

interface SharedErrorBoundaryState {
}

export default class SharedErrorBoundary extends
  Component<SharedErrorBoundaryProps, SharedErrorBoundaryState> {

  constructor(props: SharedErrorBoundaryProps) {
    super(props);
  }

  static getDerivedStateFromError(_error: Error) {
    return {};
  }

  componentDidCatch(error: Error) {
    const title = 'Some error ocurred';
    const message = error.message || 'Try reload your app';

    errorAlert(title, message);
  }

  render() {
    return (
      <>
        {this.props.children}
      </>
    );
  }

}
