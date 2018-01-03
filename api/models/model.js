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
  nombre: {
      type: String,
      required: true
  },
  email: {
      type: String,
      required: true
  },
  contrasenia:{
      type: String,
      required: true
  }
});
module.exports = mongoose.model('Usuario', usuarioSchema);

var reporteSchema = new Schema({
  tipoReporte: {
      type: String,
      required: true
  },
  imagen: {
      type: String,
      required: true
  },
  comentario: {
      type: String,
      required: true
  },
  latitud: {
      type: String,
      required: true
  },
  longitud: {
      type: String,
      required: true
  },
  fecha: {
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
module.exports = mongoose.model('Reporte', reporteSchema);
 // },
  // usuario: { 
  //   type: Schema.ObjectId, 
  //   ref: "Usuario",
  //   required: true 
  // } 