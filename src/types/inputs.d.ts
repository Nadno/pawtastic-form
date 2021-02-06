import { ChangeEvent } from "react";

interface CustomInputProps {
  id?: string;
  name: string;
  label: string;
  error?: string;
  placeholder?: string;
  handleChange(e: ChangeEvent): void;
}

export default CustomInputProps;