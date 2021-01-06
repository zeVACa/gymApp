

module.exports.getRoot = (req, res) => {
   const Users = require('../models/Users');

   const user = new Users({
      email: "test-email@mail.ru",
      password: "test-password"
   });

   res.json(user);
   console.log(user);

   user.save();
}