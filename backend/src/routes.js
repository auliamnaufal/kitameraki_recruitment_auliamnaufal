const { getAllTasksHandler, addTaskHandler } = require("./handler");

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
];

module.exports = routes;
