const {
  getAllTasksHandler,
  addTaskHandler,
  editTaskByIdHandler,
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
];

module.exports = routes;
