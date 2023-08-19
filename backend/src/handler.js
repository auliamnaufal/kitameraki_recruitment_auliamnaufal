const { nanoid } = require("nanoid");
const tasks = require("./task");

const getAllTasksHandler = (request, h) => {
  const response = h.response({
    status: "success",
    data: {
      results: tasks.map((task) => ({
        id: task.id,
        title: task.title,
        description: task.description,
      })),
    },
  });
  response.code(200);
  return response;
};

const addTaskHandler = (request, h) => {
  const { title, description } = request.payload;

  const id = nanoid(16);

  const newTask = {
    id,
    title,
    description,
  };

  if (!title) {
    const response = h.response({
      status: "fail",
      message: "Gagal menambahkan task. Mohon isi judul task",
    });
    response.code(400);
    return response;
  }

  tasks.push(newTask);
  const isSuccess = tasks.filter((book) => book.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: "success",
      message: "Task berhasil ditambahkan",
      data: {
        id: id,
        title: title,
        description: description,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: "error",
    message: "Task Gagal ditambahkan",
  });
  response.code(500);
  return response;
};

module.exports = {
  getAllTasksHandler,
  addTaskHandler,
};
