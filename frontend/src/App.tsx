import {
  DefaultPalette,
  IStackItemStyles,
  IStackStyles,
  IStackTokens,
  Stack,
} from "@fluentui/react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";

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

export interface Task {
  id: number;
  name: string;
  description: string;
}

const App = () => {
  const items: Task[] = [
    {
      id: 1,
      name: "List 1",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quisquam explicabo laboriosam quibusdam veritatis odio quo, hic aliquid exercitationem? Suscipit illo sit nesciunt mollitia ex quibusdam. Pariatur quas dolorum perspiciatis.",
    },
    {
      id: 2,
      name: "List 2",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quisquam explicabo laboriosam quibusdam veritatis odio quo, hic aliquid exercitationem? Suscipit illo sit nesciunt mollitia ex quibusdam. Pariatur quas dolorum perspiciatis.",
    },
    {
      id: 3,
      name: "List 3",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quisquam explicabo laboriosam quibusdam veritatis odio quo, hic aliquid exercitationem? Suscipit illo sit nesciunt mollitia ex quibusdam. Pariatur quas dolorum perspiciatis.",
    },
    {
      id: 4,
      name: "List 4",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quisquam explicabo laboriosam quibusdam veritatis odio quo, hic aliquid exercitationem? Suscipit illo sit nesciunt mollitia ex quibusdam. Pariatur quas dolorum perspiciatis.",
    },
  ];
  const [tasks, setTasks] = useState<Task[]>(items);
  const [selectedTask, setSelectedTask] = useState<Task>();

  const onSelected = (id: number) => {
    setSelectedTask(tasks.find((task) => task.id === id));
  };

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
        <TaskList tasks={tasks} onSelected={onSelected} />
      </Stack.Item>
      <Stack.Item grow styles={stackItemStyles}>
        I shrink
      </Stack.Item>
    </Stack>
  );
};

export default App;
