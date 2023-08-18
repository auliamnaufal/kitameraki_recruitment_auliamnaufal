const { getAllTasksHandler } = require("./handler");

const routes = [
  {
    method: "GET",
    path: "/tasks",
    handler: getAllTasksHandler,
  },
];

module.exports = routes;
