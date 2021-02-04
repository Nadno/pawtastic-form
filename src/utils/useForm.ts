import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

interface UseForm<ini> {
  initialValues: ini;
  validate: Function;
}

export default function useForm<iniValues>({
  initialValues,
  validate,
}: UseForm<iniValues>) {
  const [errors, setErros] = useState<{ [x: string]: any }>({});
  const [values, setValues] = useState<{ [x: string]: any }>(initialValues);
  const [changedValue, setChangedValue] = useState('');

  useEffect(() => {
    validateValues(changedValue, values);
  }, [values]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  function handleChange(e: ChangeEvent) {
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    
    setChangedValue(target.name);
    setValues((prev) => {
      const newValue = {
        ...prev,
        [target.name]: value,
      };
      console.log(`***${target.name}: `, value);
      return newValue;
    });
  }

  function validateValues(changedValue: string, values: any) {
    setErros(validate(changedValue, values));
  }

  function checkInputs(names: string[]) {
    const error = validate(names, values);
    setErros(error);
    return error;
  }

  return {
    errors,
    values,
    handleSubmit,
    handleChange,
    checkInputs,
  };
}
