'use strict';


var mongoose = require('mongoose'),
Usuario = mongoose.model('Usuario');

exports.list_all_user = function(req, res) {
  Usuario.find({}, function(err, usuario) {
    if (err)
      res.send(err);
    res.json(usuario);
  });
};

exports.create_a_user = function(req, res) {
  var user = false;
  Usuario.findOne({email:req.body.email}, function(err, usuario) {
    if (err)
      user = false;
  	else
      user = true;
  });
  if(!user){
  	res.send(null);
  }else{
	  var new_user = new Usuario(req.body);
	  new_user.save(function(err, usuario) {
	    if (err)
	      res.send(err);
	    res.json(usuario);
	  });
  }
};


exports.validate_exist_user = function(req, res) {
  Usuario.findOne({email:req.params.userId}, function(err, usuario) {
    if (err)
      res.send(err);
    res.json(usuario);
  });
};


/*exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};*/


exports.delete_a_user = function(req, res) {
  Usuario.remove({
    _id: req.params.reportId
  }, function(err, usuario) {
    if (err)
      res.send(err);
    res.json({ message: 'Reporte successfully deleted' });
  });
};