import { Stack } from "@fluentui/react";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import { useEffect, useRef, useState } from "react";
import TaskDetail from "./components/TaskDetail/TaskDetail";
import {
  nonShrinkingStackItemStyles,
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
  const [perPage, setPerPage] = useState(10);
  const taskListRef = useRef(null);

  const onSelected = (id: number) => {
    setSelectedTask(tasks.find((task) => task.id === id));
  };

  const onSubmit: SubmitHandler<Task> = (data) => {
    axios
      .post("http://localhost:8080/tasks", data)
      .then((res) => setTasks([...tasks, { ...res.data.data }]))
      .catch((err) => console.log(err));

    // setTasks([...tasks, { ...data }]);
  };

  const onDelete = (id: any) => {
    axios
      .delete("http://localhost:8080/tasks/" + id)
      .then((res) => {
        setTasks(tasks.filter((task) => task.id !== id));
      })
      .catch((err) => console.log(err));

    setSelectedTask(undefined);
  };

  const onTaskUpdate = (data: Task) => {
    axios
      .patch("http://localhost:8080/tasks/" + data.id, data)
      .then((res) =>
        setTasks(
          tasks.map((task) => (task.id === data.id ? res.data.data : task))
        )
      )
      .catch((err) => console.log(err));

    setSelectedTask(data);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/tasks?perPage=" + perPage)
      .then((res) => setTasks(res.data.data.results))
      .catch((err) => console.log(err));
  }, [perPage]);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop ===
      e.target.clientHeight + 100;
    if (bottom) {
      setPerPage(perPage + 5);
    }
  };

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
        <Panel
          ref={taskListRef}
          className={styles.Panel}
          collapsible={true}
          order={2}
        >
          <Stack.Item grow styles={taskListStyles} onScroll={handleScroll}>
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
