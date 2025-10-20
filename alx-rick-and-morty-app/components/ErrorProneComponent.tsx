import React from 'react';

const ErrorProneComponent: React.FC = () => {
  throw new Error('This is a test error to check the ErrorBoundary!');
};

export default ErrorProneComponent;