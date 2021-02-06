import React from 'react';

export default class ErrorBoundary extends React.Component {
  state: { hasError: boolean; errorMessage: string } = {
    hasError: false,
    errorMessage: '',
  };

  static getDerivedStateFromError(err: Error) {
    return {
      hasError: true,
      errorMessage: err,
    };
  }

  render() {
    if (this.state.hasError) {
      console.error(this.state.errorMessage);
      return (
        <div className="boundary-error">
          <p>
            Ocorreu um error inesperado, por favor reinicie a página ou tente
            mais tarde.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
