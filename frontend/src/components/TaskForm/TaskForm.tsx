import {
  IStackStyles,
  IStackTokens,
  PrimaryButton,
  Stack,
  Text,
  TextField,
} from "@fluentui/react";
import { innerStackTokens, stackStyles } from "./styles";

const TaskForm = () => {
  return (
    <Stack styles={stackStyles} tokens={innerStackTokens}>
      <Text variant="xxLarge">Create New Task</Text>
      <form>
        <Stack styles={stackStyles} tokens={innerStackTokens}>
          <TextField label="Title" required />
          <TextField label="Description" multiline rows={3} />
        </Stack>
        <PrimaryButton
          type="submit"
          text="Create"
          allowDisabledFocus
          style={{ marginTop: 20 }}
        />
      </form>
    </Stack>
  );
};

export default TaskForm;
