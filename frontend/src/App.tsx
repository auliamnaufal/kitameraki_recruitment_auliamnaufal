import {
  DefaultPalette,
  IStackItemStyles,
  IStackStyles,
  IStackTokens,
  Stack,
} from "@fluentui/react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const stackItemStyles: IStackItemStyles = {
  root: {
    alignItems: "start",
    background: DefaultPalette.themeLighter,
    color: DefaultPalette.black,
    display: "flex",
    height: "100vh",
    width: "100%",
    justifyContent: "start",
    overflow: "hidden",
  },
};
const nonShrinkingStackItemStyles: IStackItemStyles = {
  root: {
    alignItems: "start",
    background: DefaultPalette.themeLighter,
    color: DefaultPalette.black,
    display: "flex",
    height: "100vh",
    justifyContent: "start",
    overflow: "hidden",
    width: 500,
    padding: 20,
  },
};

// Tokens definition
const innerStackTokens: IStackTokens = {
  childrenGap: 5,
};

const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.themeLight,
    overflow: "hidden",
  },
};

const App = () => {
  return (
    <Stack
      enableScopedSelectors
      horizontal
      styles={stackStyles}
      tokens={innerStackTokens}
    >
      <Stack.Item disableShrink styles={nonShrinkingStackItemStyles}>
        <TaskForm />
      </Stack.Item>
      <Stack.Item grow styles={stackItemStyles}>
        <TaskList />
      </Stack.Item>
      <Stack.Item grow styles={stackItemStyles}>
        I shrink
      </Stack.Item>
    </Stack>
  );
};

export default App;
