export default function customMessage(name: string, error: string): string {
  const messages: any = {
    default: {
      empty: 'Required',
      invalid: 'Invalid',
      notSelected: 'Select an option',
    },
    confirm: {
      notEqual: 'The passwords is not equal',
    },
    password: {
      invalid: 'Minimum 3 figures, only with letters and numbers',
    },
    policy: {
      off: 'This option is required',
    },
  };

  if (messages[name]?.[error]) {
    return messages[name][error];
  }

  return messages.default[error];
}
