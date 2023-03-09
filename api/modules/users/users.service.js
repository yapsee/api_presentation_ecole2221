const User = require('./users.schema');

module.exports.signUpUser = async (userparams) => { 
  const user = {...userparams, role: 'ADMIN'};
  console.log(user);
  const result = await User.create(user);
  return result;

}

module.exports.findUserByUsername = async (username) => {
  const user = await User.findOne({username: username});
  return user

}

module.exports.list = async () => {
  const users = await User.findAll();
  return users

}