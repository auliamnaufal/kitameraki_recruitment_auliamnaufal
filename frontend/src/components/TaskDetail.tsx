import { IStackStyles, IStackTokens, Stack, Text } from "@fluentui/react";
import { Task } from "../App";

const innerStackTokens: IStackTokens = {
  childrenGap: 10,
};

const stackStyles: IStackStyles = {
  root: {
    overflow: "hidden",
    width: "100%",
  },
};

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
        <Text variant="xxLarge">{task?.name}</Text>
        <Text variant="medium">{task?.description}</Text>
      </Stack>
    </>
  );
};

export default TaskDetail;
