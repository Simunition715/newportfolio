var Emails = require('../controllers/emails')

module.exports = function(app){
	app.post('/email',Emails.create);
	app.get('/email',Emails.index);
}