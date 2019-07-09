// Most code on this page is based on Kareem Grant's repo here:
// https://git.generalassemb.ly/sei-nyc-thunderbolt/express-auth-lesson
const express = require('express');
const authRouter = express.Router();
const {passport, jwtSign} = require('../auth/handleAuth');

authRouter.post('/login', (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            if(err || !user) {
                const error = new Error("An Error Occurred");
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