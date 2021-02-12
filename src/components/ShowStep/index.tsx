import React from 'react';
import { useStep } from '../../contexts/useStep';
import './index.scss';

const ShowStep = () => {
  const { step } = useStep(0, 6);
  const showStep = step >= 2;

  if (showStep) {
    const humanProf = step === 2;
    const petBasics = step >= 3 && step < 5;
    const petDetails = step === 5;
    const petConfirm = step === 6;

    return (
      <div className="show-step">
        <div className="select">
          <input
            type="radio"
            className="select__input"
            name="step"
            id="first"
            checked={humanProf}
            readOnly
          />
          <label htmlFor="first">Human profile</label>
          <span className="select__check"></span>
        </div>

        <div className="select">
          <input
            type="radio"
            className="select__input"
            name="step"
            id="second"
            checked={petBasics}
            readOnly
          />
          <label htmlFor="second"> Pet basics </label>
          <span className="select__check"></span>
        </div>

        <div className="select">
          <input
            type="radio"
            className="select__input"
            name="step"
            id="third"
            checked={petDetails}
            readOnly
          />
          <label htmlFor="third"> Pet details </label>
          <span className="select__check"></span>
        </div>
        <div className="select">
          <input
            type="radio"
            className="select__input"
            name="step"
            id="fourth"
            checked={petConfirm}
            readOnly
          />
          <label htmlFor="fourth"> Confirm </label>
          <span className="select__check"></span>
        </div>
      </div>
    );
  }

  return (
    <section className="why-us" tabIndex={0}>
      <h2 className="why-title">Why our service?</h2>
      <ol className="answer-list">
        <li className="why-answer">
          <p>We're animal lovers backed by</p>
        </li>
        <li className="why-answer">
          <p>Powered by tech, so you can</p>
        </li>
        <li className="why-answer">
          <p>Updates and pics for every</p>
        </li>
      </ol>
    </section>
  );
};

export default ShowStep;
