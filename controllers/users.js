const User = require('../models/user');

module.exports.registerForm = (req, res) =>
{
    res.render('user/register');
}

module.exports.registerUser = async (req, res, next) =>
{
    try
    {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err =>
        {
            if (err) return next(err);
            req.flash('success', 'Welcome to Mini-Games!');
            res.redirect('/');
        });

    }
    catch (e)
    {
        req.flash('error', e.message);
        res.redirect('/register')
    }
}

module.exports.loginForm = (req, res) =>
{
    res.render('user/login')
}

module.exports.loginUser = (req, res) =>
{
    const redirectUrl = res.locals.returnTo || '/';
    req.flash('success', 'Welcome back!');
    res.redirect(redirectUrl);
}

module.exports.logoutUser = (req, res, next) =>
{
    req.logout(function (err)
    {
        if (err)
        {
            return next(err);
        }
        req.flash('success', 'See you soon!');
        res.redirect('/');
    });
}