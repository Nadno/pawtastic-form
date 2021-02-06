import React from 'react';

import ErrorBoundary from './components/ErrorBoundary';
import LeftSide from './layouts/LeftSide';
import Logo from './components/Logo';
import Form from './components/Form';

import { StepProvider } from './contexts/useStep';
import ShowStep from './components/ShowStep';

function App() {
  return (
    <StepProvider>
      <div className="App">
        <LeftSide>
          <Logo />

          <div className="side__content">
            <ShowStep />
          </div>
        </LeftSide>

        <ErrorBoundary>
          <Form />
        </ErrorBoundary>
      </div>
    </StepProvider>
  );
}

export default App;
