// Most code on this page is based on Kareem Grant's repo here:
// https://git.generalassemb.ly/sei-nyc-thunderbolt/express-auth-lesson
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const {User} = require('../models/index');
const jwt = require('jsonwebtoken');
// const JWTStrategy = require('passport-jwt').Strategy;
// const ExtractJWT = require('passport-jwt').ExtractJwt;
const dotenv = require('dotenv');
const buf = Buffer.from(`TOKEN_KEY=${process.env.LAUNDRY_CYCLE_APP_SECRET_STRING}`);
const config = dotenv.parse(buf);

const SECRET = config.TOKEN_KEY;
const jwtSign = (payload) => {
    return jwt.sign(payload, SECRET)
}

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
            return done(null, false, {message: "user not found"})
        }

        const validate = await bcrypt.compare(password, user.password);
        console.log(`*** validate: ${validate} ***`);

        if(!validate) {
            return done(null, false, {message: "incorrect password"})
        }

        return done(null, user, {message: "logged in successfully"})
    } catch (err) {
        return done(err)
    }
}
))

module.exports = {
    passport,
    jwtSign
}