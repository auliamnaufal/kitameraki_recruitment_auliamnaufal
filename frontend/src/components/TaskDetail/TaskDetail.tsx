import { DefaultButton, PrimaryButton, Stack, Text } from "@fluentui/react";
import { Task } from "../../App";
import { dangerButtonTheme, innerStackTokens, stackStyles } from "./styles";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { DynamicFieldData } from "../../dynamic-control-types";
import { DynamicControl } from "../TaskForm/DynamicControl";
import { ErrorMessage } from "@hookform/error-message";

interface Props {
  task: Task | undefined;
  onDelete: (id: any) => void;
  fields: DynamicFieldData[];
  onUpdate: (data: Task) => void;
}

const TaskDetail = ({ task, onDelete, fields, onUpdate }: Props) => {
  const [isUpdate, setUpdate] = useState(false);

  const formMethods = useForm();
  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = formMethods;

  if (isUpdate)
    return (
      <form
        onSubmit={handleSubmit((data: Task) => {
          onUpdate({ ...data, id: task.id });
          setUpdate(false);
        })}
        style={{ width: "100%" }}
      >
        <FormProvider {...formMethods}>
          {fields.map((d, i) => (
            <div key={i} className="custom-input">
              <label htmlFor={d.fieldName}>{d.label}</label>
              <DynamicControl {...d} defaultValue={task[d.fieldName]} />
              <ErrorMessage errors={errors} name={d.fieldName} />
            </div>
          ))}
        </FormProvider>
        <PrimaryButton
          type="submit"
          disabled={isSubmitting}
          style={{ marginRight: "20px" }}
        >
          Update
        </PrimaryButton>
        <DefaultButton text="Cancel" onClick={() => setUpdate(false)} />
      </form>
    );

  return (
    <Stack styles={stackStyles} tokens={innerStackTokens}>
      {!task && (
        <Text variant="large" style={{ width: "max-content" }}>
          No Task Selected
        </Text>
      )}
      <Text variant="xxLarge">{task?.title}</Text>
      <Text variant="medium">{task?.description}</Text>
      {task && (
        <Stack horizontal gap={20} style={{ marginTop: "20px" }}>
          <PrimaryButton text="Update" onClick={() => setUpdate(true)} />
          <PrimaryButton
            text="Delete"
            theme={dangerButtonTheme}
            onClick={() => onDelete(task?.id)}
          />
        </Stack>
      )}
    </Stack>
  );
};

export default TaskDetail;
