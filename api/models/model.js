'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});
module.exports = mongoose.model('Tasks', TaskSchema);

var usuarioSchema = new Schema({
  nombre: String,
  email: String,
  contrasenia: String
});
module.exports = mongoose.model('Usuario', usuarioSchema);

var reporteSchema = new Schema({
  tipoReporte: String,
  imagen: String,
  latitud: String,
  longitud: String,
  fecha: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('Reporte', reporteSchema);