module.exports.register = (req, res) => {
  res.send('hello from register');
};

module.exports.login = (req, res) => {
  res.status(200).json({ message: 'hello from login login ' });
};
