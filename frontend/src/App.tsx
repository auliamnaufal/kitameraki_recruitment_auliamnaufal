import { Stack } from "@fluentui/react";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import { useState } from "react";
import TaskDetail from "./components/TaskDetail/TaskDetail";
import {
  innerStackTokens,
  nonShrinkingStackItemStyles,
  stackStyles,
  taskDetailStyles,
  taskListStyles,
} from "./AppStyles";
import { SubmitHandler } from "react-hook-form";
import { fields } from "./components/TaskForm/TaskFormData";

export interface Task {
  id: number;
  title: string;
  description: string;
}

const items: Task[] = [
  {
    id: 1,
    title: "List 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quisquam explicabo laboriosam quibusdam veritatis odio quo, hic aliquid exercitationem? Suscipit illo sit nesciunt mollitia ex quibusdam. Pariatur quas dolorum perspiciatis.",
  },
  {
    id: 2,
    title: "List 2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quisquam explicabo laboriosam quibusdam veritatis odio quo, hic aliquid exercitationem? Suscipit illo sit nesciunt mollitia ex quibusdam. Pariatur quas dolorum perspiciatis.",
  },
  {
    id: 3,
    title: "List 3",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quisquam explicabo laboriosam quibusdam veritatis odio quo, hic aliquid exercitationem? Suscipit illo sit nesciunt mollitia ex quibusdam. Pariatur quas dolorum perspiciatis.",
  },
  {
    id: 4,
    title: "List 4",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quisquam explicabo laboriosam quibusdam veritatis odio quo, hic aliquid exercitationem? Suscipit illo sit nesciunt mollitia ex quibusdam. Pariatur quas dolorum perspiciatis.",
  },
];

const App = () => {
  const [tasks, setTasks] = useState<Task[]>(items);
  const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined);

  const onSelected = (id: number) => {
    setSelectedTask(tasks.find((task) => task.id === id));
  };

  const onSubmit: SubmitHandler<Task> = (data) => {
    setTasks([...tasks, { ...data, id: Math.random() }]);
  };

  return (
    <Stack
      enableScopedSelectors
      horizontal
      styles={stackStyles}
      tokens={innerStackTokens}
    >
      <Stack.Item disableShrink styles={nonShrinkingStackItemStyles}>
        <TaskForm fields={fields} onSubmit={onSubmit} />
      </Stack.Item>
      <Stack.Item grow styles={taskListStyles}>
        <TaskList tasks={tasks} onSelected={onSelected} />
      </Stack.Item>
      <Stack.Item grow styles={taskDetailStyles}>
        <TaskDetail task={selectedTask} />
      </Stack.Item>
    </Stack>
  );
};

export default App;
