import { ChangeEvent, InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  handleChange(e: ChangeEvent): void;
}

export default CustomInputProps;