var User = require('./server.user.model')

module.exports = {
	getUsers: function(req, res, next) {
		User.find().exec(function(err, user) {
			if(err) {
				res.status(500).send(err);
			} else {
				res.status(200).json(user);
			}
		})
	},
	
	addUser: function(req, res, next) {
		var user = new User(req.body);
		user.save(function(err, response) {
			if(err) {
				res.status(500).send(err);
			} else {
				res.status(200).json(user);
			}
		})
	}
}