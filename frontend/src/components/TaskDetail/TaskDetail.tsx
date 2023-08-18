import { IStackStyles, IStackTokens, Stack, Text } from "@fluentui/react";
import { Task } from "../../App";
import { innerStackTokens, stackStyles } from "./styles";

interface Props {
  task: Task | undefined;
}

const TaskDetail = ({ task }: Props) => {
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
      </Stack>
    </>
  );
};

export default TaskDetail;
