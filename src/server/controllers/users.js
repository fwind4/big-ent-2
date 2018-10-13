const User = require('../models').User;

module.exports = {
  list(req, res) {
    return User.all()
      .then((user) => res.status(200).send(user))
      .catch((error) => res.status(400).send(error));
  }
};
