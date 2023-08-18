import React, { useState } from "react";
import { PrimaryButton, Stack, Text, TextField } from "@fluentui/react";
import { Task } from "../../App";

interface Props {
  onSubmit: (data: Task) => void;
}

const TaskForm = ({ onSubmit }: Props) => {
  const [formData, setFormData] = useState<Task>({
    id: 0,
    title: "",
    description: "",
  });

  const handleInputChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    onSubmit(formData);
    setFormData({
      id: 0,
      title: "",
      description: "",
    });
  };

  return (
    <Stack>
      <Text variant="xxLarge">Create New Task</Text>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit();
        }}
      >
        <Stack>
          <TextField
            label="Title"
            required
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <TextField
            label="Description"
            multiline
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
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
