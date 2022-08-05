import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { error: false };

  static getDerivedStateFromError() {
    return { error: true };
  };

  componentDidCatch(error) {
    return {error};
  };

  componentDidUpdate(_, prevState) {
    if (prevState.error && prevState.error === this.state.error) {
      this.setState({ error: false });
    };
  };
  
  render() {
    const { error } = this.state;
    const { FallbackComponent, children } = this.props;

    if (error) {
      return <FallbackComponent error={error} />
    };

    return children;
  };
};

export default ErrorBoundary;
