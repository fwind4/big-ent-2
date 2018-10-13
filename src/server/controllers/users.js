const User = require('../models').User;

module.exports = {
  list(req, res) {
    return User.all()
      .then((users) => res.status(200).send({users, status: 'online'}))
      .catch((error) => res.status(400).send(error));
  }
};
