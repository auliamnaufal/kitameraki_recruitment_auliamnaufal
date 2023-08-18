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
import TaskDetail from "./components/TaskDetail";

const stackItemStyles: IStackItemStyles = {
  root: {
    alignItems: "start",
    background: DefaultPalette.themeLighter,
    color: DefaultPalette.black,
    display: "flex",
    height: "calc(100vh - 40px)",
    width: "100%",
    justifyContent: "start",
    overflow: "hidden",
    padding: "20px",
  },
};
const nonShrinkingStackItemStyles: IStackItemStyles = {
  root: {
    alignItems: "start",
    background: DefaultPalette.themeLighter,
    color: DefaultPalette.black,
    display: "flex",
    height: "calc(100vh - 40px)",
    justifyContent: "start",
    overflow: "hidden",
    width: 500,
    padding: "20px",
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
  const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined);

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
        <TaskDetail task={selectedTask} />
      </Stack.Item>
    </Stack>
  );
};

export default App;
