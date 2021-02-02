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

      // console.log('***useForm: ', newValue);
      return newValue;
    });
  }

  function validateValues(changedValue: string, values: any) {
    setErros(validate(changedValue, values));
  }

  return {
    errors,
    values,
    handleSubmit,
    handleChange,
  };
}
