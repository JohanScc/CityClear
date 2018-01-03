'use strict';


var mongoose = require('mongoose'),
Reporte = mongoose.model('Reporte'),
Usuario = mongoose.model('Usuario');

exports.list_all_report = function(req, res) {
  Reporte.find({}, function(err, reporte) {
    if (err)
      res.send(err);
    res.json(reporte);
  });
};

exports.create_a_report = function(req, res) {
  var user;	
  Usuario.find({_id:req.body.usuario}, function(err, usuario) {
    if (err){
      res.send(err);
    }
    else{
	    user = usuario;
		if(user.length === 0){
		  res.send("user not exist");
		  	
		}else{
		  var new_reporte = new Reporte(req.body);
	  	  new_reporte.save(function(err, reporte) {
		      if (err)
		       	 res.send(err);
		      res.json(reporte);
		  });
		  	
		}
	}
  	
  });

  
};


exports.read_a_report = function(req, res) {
  Reporte.findById(req.params.reportId, function(err, reporte) {
    if (err)
      res.send(err);
    res.json(reporte);
  });
};


/*exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};*/


exports.delete_a_report = function(req, res) {
  Reporte.remove({
    _id: req.params.reportId
  }, function(err, reporte) {
    if (err)
      res.send(err);
    res.json({ message: 'Reporte successfully deleted' });
  });
};

exports.delete_all_report = function(req, res) {
  Reporte.remove(function(err, reporte) {
    if (err)
      res.send(err);
    res.json({ message: 'Reporte successfully deleted' });
  });
};