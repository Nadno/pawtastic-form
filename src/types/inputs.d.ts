import { ChangeEvent } from "react";

interface CustomInputProps {
  id?: string;
  name: string;
  label: string;
  error?: string;
  placeholder?: string;
  autoFocus?: boolean;
  handleChange(e: ChangeEvent): void;
}

export default CustomInputProps;