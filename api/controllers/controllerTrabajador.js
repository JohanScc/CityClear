'use strict';


var mongoose = require('mongoose'),
Trabajador = mongoose.model('Trabajador');


exports.list_all_trabajador = function(req, res) {
  Trabajador.find({}, function(err, trabajador ) {
    if (err)
      res.send(err);
    res.json(trabajador);
  });
};


exports.create_a_trabajador  = function(req, res) {
  var user;
  //console.log(req.body.email);
  Trabajador.find({email:req.body.email}, function(err, trabajador ) {
    if (err){
      res.send(err);
    }
      user = trabajador ;
	  if(user.length === 0){
  		var new_trabajador  = new Trabajador (req.body);
  		new_trabajador.save(function(err, trabajador ) {
  		  	if (err)
  		      res.send(err);
  		    res.json(trabajador );
  		});
	  	
	  }else{
	  	res.send("trabajador existe");
	  }
  	
  });
};


exports.validate_exist_trabajador  = function(req, res) {
  Trabajador.find({email:req.params.trabajadorId, }, function(err, trabajador) {
    if (err)
      res.send(err);
    res.json(trabajador);
  });
};


/*exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};*/

exports.delete_all_trabajador = function(req, res) {
  Trabajador.remove(function(err, trabajador) {
    if (err)
      res.send(err);
    res.json({ message: 'Trabajador successfully deleted' });
  });
}; 

exports.delete_a_trabajador = function(req, res) {
  Trabajador.remove({
    _id: req.params.trabajadorId
  }, function(err, trabajador) {
    if (err)
      res.send(err);
    res.json({ message: 'Trabajador successfully deleted' });
  });
};