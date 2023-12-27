const User = require('../models/user');
const userView = require('../views/user');

module.exports.addUser = async () =>
{
    userView.showMessage("Username: ")
    let username = await userView.getUsernameInput();
    userView.showMessage("Password: ")
    let password = await userView.getPasswordInput();
    const user = await User.findOne({ username });
    if (!user)
        await User.create({ username, password }).then(() => userView.showMessage("You've signed in successfully!"));
    else
    { userView.showMessage("A user with this username already exists!"); }


}
module.exports.logIn = async () =>
{
    userView.showMessage("Username: ")
    let username = await userView.getUsernameInput();
    userView.showMessage("Password: ")
    let password = await userView.getPasswordInput();
    const user = await User.findOne({ username, password });
    return user;

}