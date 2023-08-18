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

module.exports = {
  getAllTasksHandler,
};
