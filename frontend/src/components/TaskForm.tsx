import {
  DefaultPalette,
  IStackStyles,
  IStackTokens,
  PrimaryButton,
  Stack,
  Text,
  TextField,
} from "@fluentui/react";

const innerStackTokens: IStackTokens = {
  childrenGap: 10,
};

const stackStyles: IStackStyles = {
  root: {
    overflow: "hidden",
    width: "100%",
  },
};

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
          text="Create"
          allowDisabledFocus
          style={{ marginTop: 20 }}
        />
      </form>
    </Stack>
  );
};

export default TaskForm;
