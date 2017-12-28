'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/controller');
  var reporteRoute = require('../controllers/controllerReportes');


  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);


  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);


  // Report Routes
  app.route('/report')
    .get(reporteRoute.list_all_report)
    .post(reporteRoute.create_a_report);


  app.route('/report/:reportId')
    .get(reporteRoute.read_a_report)
    .delete(reporteRoute.delete_a_report);
    //.put(todoList.update_a_report)
};

