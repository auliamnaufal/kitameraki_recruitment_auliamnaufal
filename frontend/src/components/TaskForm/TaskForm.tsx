import { FormProvider, useForm } from "react-hook-form";
import { DynamicFieldData } from "../../dynamic-control-types";
import { DynamicControl } from "./DynamicControl";
import "./style.css";
import { PrimaryButton, TextField } from "@fluentui/react";
import { ErrorMessage } from "@hookform/error-message";
interface Props {
  fields: DynamicFieldData[];
  onSubmit: (data: any) => void;
}

const TaskForm = ({ fields, onSubmit }: Props) => {
  const formMethods = useForm();
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = formMethods;

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
      style={{ width: "90%" }}
    >
      <FormProvider {...formMethods}>
        {fields.map((d, i) => (
          <div key={i} className="custom-input">
            <label htmlFor={d.fieldName}>{d.label}</label>
            <DynamicControl {...d} />
            <ErrorMessage errors={errors} name={d.fieldName} />
          </div>
        ))}
      </FormProvider>
      <PrimaryButton type="submit" disabled={isSubmitting}>
        Create
      </PrimaryButton>
    </form>
  );
};

export default TaskForm;
