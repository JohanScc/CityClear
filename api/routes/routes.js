'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/controller');
  var reporteRoute = require('../controllers/controllerReportes');
  var usuarioRoute = require('../controllers/controllerUsuario');
  var trabajadorRoute = require('../controllers/controllerTrabajador');


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
    .delete(reporteRoute.delete_all_report)
    .post(reporteRoute.create_a_report);


  app.route('/report/:reportId')
    .get(reporteRoute.read_a_report)
    .delete(reporteRoute.delete_a_report)
    .put(reporteRoute.update_a_report);


  app.route('/reportEmployee/:reportId')
  	.get(reporteRoute.list_all_reportOfEmployee)
  	.put(reporteRoute.update_a_reportEmployee);


     // User Routes
  app.route('/user')
    .get(usuarioRoute.list_all_user)
    .delete(usuarioRoute.delete_all_user)
    .post(usuarioRoute.create_a_user);


  app.route('/user/:userId')
    .get(usuarioRoute.validate_exist_user)
    .delete(usuarioRoute.delete_a_user);
    //.put(todoList.update_a_report)

   // trabajador
  app.route('/employee')
    .get(trabajadorRoute.list_all_trabajador)
    .delete(trabajadorRoute.delete_all_trabajador)
    .post(trabajadorRoute.create_a_trabajador);


  app.route('/employee/:trabajadorId')
    .get(trabajadorRoute.validate_exist_trabajador)
    .delete(trabajadorRoute.delete_a_trabajador);
    //.put(todoList.update_a_report)  
};

