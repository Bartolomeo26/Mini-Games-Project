const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const passport = require('passport');
const localPassport = require('passport-local');
const User = require('./models/user');
const flash = require('connect-flash');
const session = require('express-session');
const CustomError = require('./utils/CustomError');
const userRoutes = require('./routes/users');
const wordRoutes = require('./routes/words');
const countryRoutes = require('./routes/countries');
const numberSequenceRoutes = require('./routes/number_sequence');
const simonSaysRoutes = require('./routes/simon_says');
const dashboardRoutes = require('./routes/dashboards');


// const { countryGame } = require('./controllers/country');
// const { simonSaysGame } = require('./controllers/simon_says');
// const { wordGame } = require('./controllers/word');
// const { numberSequenceGame } = require('./controllers/number_sequence');
// const { sleepFunction } = require('./utils/sleepFunction');
// const { sortDesc, sortAsc } = require('./utils/sortingFunctions');
// const Game = require('./models/game')
// const mainView = require('./views/main')
// const mainModel = require('./models/main');
// const user = require('./controllers/user');
// const mainController = require('./controllers/main');


main()
    .then(() => console.log("Mongo connection working!"))
    .catch(err => console.log(err));


async function main()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/kck-project2');
}
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.use(express.static('public'));

const sessionConfig = {
    secret: 'secretcode',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localPassport(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req, res, next) =>
{
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.use('/', userRoutes);
app.use('/words', wordRoutes);
app.use('/countries', countryRoutes);
app.use('/number-sequence', numberSequenceRoutes);
app.use('/simon-says', simonSaysRoutes);
app.use('/dashboard', dashboardRoutes);

app.listen('3000', () =>
{
    console.log("Everything working on port 3000!")
})

app.get('/', (req, res) =>
{
    res.render('home')
})
app.all('*', (req, res, next) =>
{
    next(new CustomError('Page Not Found', 404))
})
app.use((err, req, res, next) =>
{
    const { statusCode = 500 } = err;
    res.status(statusCode).render('error', { err })
})