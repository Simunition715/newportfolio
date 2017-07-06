var mongoose = require('mongoose');

var EmailSchema = new mongoose.Schema({
	email: {
		type: String
	}
},{timestamps: true})

mongoose.model('Email', EmailSchema);

var Email = mongoose.model('Email');