const AuthService = require('./auth.service');


module.exports.register = async (req, res) => {
    const data = req.body;
    const user = await AuthService.register(data);
    res.send(user);
}

module.exports.login = async (req, res) => {
    const data = req.body;
    const session = await AuthService.login(data);
   
    if(!session) {
        res.status(404).send("User not found!");
    } else {
        res.send(session)
    }
}



















// module.exports.list = (req, res) => {
//     res.send(AuthService.listUsers());
// }