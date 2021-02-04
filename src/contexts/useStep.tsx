import React, { createContext, useContext, useState } from 'react';

const ContextStep = createContext<any>(null);

export const StepProvider = ({ children }: any) => {
  const [step, setStep] = useState(0);

  return (
    <ContextStep.Provider value={{
      step,
      setStep,
    }}>
      {children}
    </ContextStep.Provider>
  );
};

export function useStep(min_value: number, max_value: number = 1) {
  const ctx = useContext(ContextStep);
  if (!ctx) throw new Error("useStep must be used within a StepProvider");
  
  const { step, setStep } = ctx;

  const next = () => {
    if (step === max_value) return;
    setStep((prevStep: number) => prevStep + 1)
  };

  const back = () => {
    if (step === min_value) return;
    setStep((prevStep: number) => prevStep - 1)
  };

  return {
    step,
    next, back
  };
}