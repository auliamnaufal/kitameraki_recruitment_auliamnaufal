import { PrimaryButton, Stack, Text } from "@fluentui/react";
import { Task } from "../../App";
import { dangerButtonTheme, innerStackTokens, stackStyles } from "./styles";

interface Props {
  task: Task | undefined;
  onDelete: (id: any) => void;
}

const TaskDetail = ({ task, onDelete }: Props) => {
  return (
    <>
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
            <PrimaryButton text="Update" />
            <PrimaryButton
              text="Delete"
              theme={dangerButtonTheme}
              onClick={() => onDelete(task?.id)}
            />
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default TaskDetail;
