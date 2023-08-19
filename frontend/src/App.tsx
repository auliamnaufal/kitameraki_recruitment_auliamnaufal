import { Stack } from "@fluentui/react";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import { useEffect, useState } from "react";
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
import axios from "axios";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ResizeHandle from "./components/ResizeHandle";
import styles from "./components/style.module.css";

export interface Task {
  id: number;
  title: string;
  description: string;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined);

  const onSelected = (id: number) => {
    setSelectedTask(tasks.find((task) => task.id === id));
  };

  const onSubmit: SubmitHandler<Task> = (data) => {
    setTasks([...tasks, { ...data, id: Math.random() }]);
  };

  const onDelete = (id: any) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setSelectedTask(undefined);
  };

  const onTaskUpdate = (data: Task) => {
    setTasks(tasks.map((task) => (task.id === data.id ? data : task)));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks")
      .then((res) => setTasks(res.data.data.results));
  }, []);

  return (
    <>
      <PanelGroup direction="horizontal">
        <>
          <Panel
            className={styles.Panel}
            collapsible={true}
            defaultSize={25}
            order={1}
          >
            <Stack.Item disableShrink styles={nonShrinkingStackItemStyles}>
              <TaskForm fields={fields} onSubmit={onSubmit} />
            </Stack.Item>
          </Panel>
          <ResizeHandle />
        </>
        <Panel className={styles.Panel} collapsible={true} order={2}>
          <Stack.Item grow styles={taskListStyles}>
            <TaskList tasks={tasks} onSelected={onSelected} />
          </Stack.Item>
        </Panel>
        <>
          <ResizeHandle />
          <Panel
            className={styles.Panel}
            collapsible={true}
            defaultSize={35}
            minSize={35}
            order={3}
          >
            <Stack.Item grow styles={taskDetailStyles}>
              <TaskDetail
                onDelete={onDelete}
                task={selectedTask}
                fields={fields}
                onUpdate={onTaskUpdate}
              />
            </Stack.Item>
          </Panel>
        </>
      </PanelGroup>
    </>
  );
};

export default App;
