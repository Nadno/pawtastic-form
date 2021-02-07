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
  const [values, setValues] = useState<iniValues>(initialValues);
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
    if (Object.keys(error).length) {
      setErros(error);
      return error;
    }

    if (file) {
      setValues((prev) => ({
        ...prev,
        [name]: file,
      }));
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
    setErros(validate(changedValue, values));
  }

  function checkInputs(names: string[], isOkCallback: Function) {
    const { error, hasError } = validate(names, values);
    if (hasError) {
      setErros(error);
      return;
    }

    isOkCallback();
  }

  return {
    errors,
    values,
    handleSubmit,
    handleChange,
    checkInputs,
  };
}
