// Most code on this page is based on Kareem Grant's repo here:
// https://git.generalassemb.ly/sei-nyc-thunderbolt/express-auth-lesson
const express = require('express');
const authRouter = express.Router();
const {passport, jwtSign} = require('../auth/handleAuth');

authRouter.post('/signup', async (req, res, next) => {
    passport.authenticate('signup', async (err, user, info = {}) => {
        try {
            if(err) {
                return next(err)
            }

            if(!user) {
                let error = new Error(info.message || "An error occurred during signup");
                error.status = 400;
                return next(error)
            }

            const {email, id} = user;
            const payload = {email, id};
            const token = jwtSign(payload);

            return res.json({user, token, message: "User successfully created"})
        } catch (err) {
            return next(err)
        }
    }) (req, res, next)
})

authRouter.post('/login', (req, res, next) => {
    passport.authenticate('login', async (err, user, info = {}) => {
        try {
            if(err) {
                return next(err)
            }
            
            if(!user) {
                let error = new Error(info.message || "An error occurred during login");
                error.status = 400;

                return next(error)
            }

            req.login(user, {session: false}, async (error) => {
                if(error) {
                    return next(error)
                }

                const {email, id} = user;
                const payload = {email, id};
                const token = jwtSign(payload);

                return res.json({user, token})
            })
        } catch (err) {
            return next(err)
        }
    }) (req, res, next)
})

module.exports = {
    authRouter
}