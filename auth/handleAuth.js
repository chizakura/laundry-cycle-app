// Most code on this page is based on Kareem Grant's repo here:
// https://git.generalassemb.ly/sei-nyc-thunderbolt/express-auth-lesson
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const {User} = require('../models/index');
const jwt = require('jsonwebtoken');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const dotenv = require('dotenv');
const buf = Buffer.from(`TOKEN_KEY=${process.env.LAUNDRY_CYCLE_APP_SECRET_STRING}`);
const config = dotenv.parse(buf);

const SECRET = config.TOKEN_KEY;
const jwtSign = (payload) => {
    return jwt.sign(payload, SECRET)
}

passport.use(new JWTStrategy({
    secretOrKey: SECRET,
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
}, async (token, done) => {
    try {
        const user = await User.findByPk(token.id);

        if(user) {
            done(null, user)
        } else {
            done(null, false)
        }
    } catch (err) {
        done(err)
    }
}
))

passport.use('signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    try {
        const {body: {name}} = req;
        const user = await User.create({
            name: name,
            email: email,
            password: password
        })

        if(!user) {
            return done(null, false, {message: "Unable to sign up user"})
        }
        done(null, user)
    } catch (err) {
        done(err)
    }
}
))

passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        const user = await User.findOne({
            where: {
                email: email
            }
        })
        console.log(user.email);
        console.log(`*** user: ${user} ***`);

        if(!user) {
            return done(null, false, {message: "User not found"})
        }

        const validate = await bcrypt.compare(password, user.password);
        console.log(`*** validate: ${validate} ***`);

        if(!validate) {
            return done(null, false, {message: "Incorrect password"})
        }

        return done(null, user, {message: "Logged in successfully"})
    } catch (err) {
        return done(err)
    }
}
))

const authorized = (req, res, next) => {
    passport.authenticate('jwt', {session: false}, async (error, user) => {
        if(error || !user) {
            let err = new Error("No access allowed");
            err.status = 401;
            return next(err)
        }

        req.user = user;
        return next()
    }) (req, res, next)
}

module.exports = {
    passport,
    jwtSign,
    authorized
}