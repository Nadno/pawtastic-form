import { FormEvent, useCallback, useEffect, useState } from 'react';
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

  const validateValues = useCallback((changedValue: string, values: any) => {
    setErros(validate(changedValue, values));
  }, [validate])

  useEffect(() => {
    validateValues(changedValue, values);
  }, [values, changedValue, validateValues]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  const handleFile = useCallback(({ name, files }: HTMLInputElement) => {
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
  }, [validate]);

  const handleChange = useCallback(({ target }: CustomChangeEvent) => {
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
  }, [handleFile]);


  const checkInputs = useCallback((names: string[], isOkCallback: Function) => {
    const { error, hasError } = validate(names, values);
    if (hasError) {
      setErros(error);
      return;
    }

    isOkCallback();
  }, [values, validate])

  return {
    errors,
    values,
    handleSubmit,
    handleChange,
    checkInputs,
  };
}
