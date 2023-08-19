const {
  getAllTasksHandler,
  addTaskHandler,
  editTaskByIdHandler,
  deleteTaskByIdHandler,
} = require("./handler");

const routes = [
  {
    method: "GET",
    path: "/tasks",
    handler: getAllTasksHandler,
  },
  {
    method: "POST",
    path: "/tasks",
    handler: addTaskHandler,
  },
  {
    method: "PATCH",
    path: "/tasks/{id}",
    handler: editTaskByIdHandler,
  },
  {
    method: "DELETE",
    path: "/tasks/{id}",
    handler: deleteTaskByIdHandler,
  },
];

module.exports = routes;
