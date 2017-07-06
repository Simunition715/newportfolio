var mongoose = require('mongoose');
var Email = mongoose.model('Email');

module.exports = {
	create: function(req, res){
		var email = new Email(req.body);
		email.save(function(err,doc){
			if(err){
				return res.json(err);
			}else{
				return res.json(doc);	
			}
		})
	},
	index: function(req,res){
		Email.find({}).exec(function(err, doc){
			if(err){
				return res.json(err);
			}else{
				return res.json(doc);
			}
		})
	}
}