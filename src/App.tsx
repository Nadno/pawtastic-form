import React from 'react';

import ErrorBoundary from './components/ErrorBoundary';
import LeftSide from './layouts/LeftSide';
import Logo from './components/Logo';
import Form from './components/Form';

import { StepProvider } from './contexts/useStep';

function App() {
  return (
    <StepProvider>
      <div className="App">
        <LeftSide>
          <Logo />

          <div className="side__content">
            <div className="why__us">
              <h2 className="why__tittle">Why our service?</h2>
              <ol className="why__answer">
                <li>
                  <p>We're animal lovers backed by</p>
                </li>
                <li>
                  <p>Powered by tech, so you can</p>
                </li>
                <li>
                  <p>Updates and pics for every</p>
                </li>
              </ol>
            </div>

            {/* <div className="show__steps">
            <div className="radio__field">
              <input
                type="radio"
                className="radio__to"
                id="to-2"
                name="step"
                checked
              />
              <label> Human profile </label>
              <span className="check"></span>
            </div>

            <div className="radio__field">
              <input type="radio" className="radio__to" id="to-3" name="step" />
              <label> Pet basics </label>
              <span className="check"></span>
            </div>

            <div className="radio__field">
              <input type="radio" className="radio__to" id="to-4" name="step" />
              <label> Pet details </label>
              <span className="check"></span>
            </div>
            <div className="radio__field">
              <input type="radio" className="radio__to" id="to-5" name="step" />
              <label> Confirm </label>
              <span className="check"></span>
            </div>
          </div> */}
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
