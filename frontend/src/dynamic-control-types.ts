import { RegisterOptions } from "react-hook-form";

export type ControlType = "text" | "textarea";

export interface SelectOption {
  label: string;
  value: string;
}

export interface DynamicFieldData {
  label: string;
  inputType: ControlType;
  fieldName: string;
  defaultValue: any;
  options?: SelectOption[];
  config?: RegisterOptions;
}
