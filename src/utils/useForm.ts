import { FormEvent, useEffect, useState } from 'react';
import { CustomChangeEvent } from '../types/form';

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

  function handleFile({ name, files }: HTMLInputElement) {
    const [file] = files as FileList;
    
    const error = validate(name, { [name]: file });
    if (error) {
      setErros(error);
      return error;
    }

    if (file) {
      setValues(prev => ({
        ...prev,
        [name]: file,
      }))
    }
  }

  function handleChange({ target }: CustomChangeEvent) {
    const { name, type } = target;

    if (type === 'file') return handleFile(target);
    
    const value = type === 'checkbox' ? target.checked : target.value;

    setChangedValue(name);
    setValues((prev) => {
      const newValue = {
        ...prev,
        [name]: value,
      };

      return newValue;
    });
  }

  function validateValues(changedValue: string, values: any) {
    const error = validate(changedValue, values);
    if (error) {
      setErros(error);
      return;
    }

    setErros({});
  }

  function checkInputs(names: string[]) {
    const error = validate(names, values);

    if (Object.keys(error).length) {
      setErros(error);
      return error;
    }

    setErros({});
  }

  return {
    errors,
    values,
    handleSubmit,
    handleChange,
    checkInputs,
  };
}
