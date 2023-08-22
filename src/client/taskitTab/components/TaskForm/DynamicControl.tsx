import { useFormContext } from "react-hook-form";
import { DynamicFieldData } from "../../dynamic-control-types";
import * as React from "react";

export const DynamicControl = ({
  inputType,
  fieldName,
  defaultValue,
  options = [],
  config = {},
}: DynamicFieldData) => {
  const { register } = useFormContext();

  switch (inputType) {
    case "text":
      return (
        <input
          type="text"
          {...register(fieldName, config)}
          defaultValue={defaultValue}
        />
      );
    case "textarea":
      return (
        <textarea
          rows={3}
          {...register(fieldName, config)}
          defaultValue={defaultValue}
        ></textarea>
      );
    default:
      return <input type="text" />;
  }
};
