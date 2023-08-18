import {
  IStackStyles,
  IStackTokens,
  PrimaryButton,
  Stack,
  Text,
  TextField,
} from "@fluentui/react";
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
    <Stack styles={stackStyles} tokens={innerStackTokens}>
      <Text variant="xxLarge">{task?.name}</Text>
      <Text variant="medium">{task?.description}</Text>
    </Stack>
  );
};

export default TaskDetail;
