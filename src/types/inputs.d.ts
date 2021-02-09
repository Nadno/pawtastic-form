import { AllHTMLAttributes, ChangeEvent } from "react";

interface CustomInputProps extends AllHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  handleChange(e: ChangeEvent): void;
}

export default CustomInputProps;