const UsersService = require('../users/users.service');
const jwt = require('jsonwebtoken');


module.exports.register =  ({ username, password , firstname , lastname}) => {
    return  UsersService.signUpUser({ username, password ,firstname ,lastname });
}

module.exports.login = async ({ username, password }) => {
    let user = await UsersService.findUserByUsername(username);
    if(!user || user.password !== password) {
        return null;
    } else {
        user = { ...user.toObject()};
        delete user.password;
        const token = jwt.sign(user, 'Ecole221', { expiresIn: 60 * 60 });
        return { user, token };
    }
}

module.exports.verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, 'Ecole221', (error, decoded) => {
            if(error) {
                reject(error);
            } else {
                resolve(decoded);
            }
        })
    })
}












// module.exports.listUsers = () => {
//     return UsersService.list();
// }