const express = require('express');
const protectedRouter = express.Router();
const {passport} = require('../auth/handleAuth');

protectedRouter.get('/profile', passport.authenticate('jwt', {session: false}),
    async (req, res) => {
        res.json({user: req.user, message: 'authenticated'})
    }
)

module.exports = {
    protectedRouter
}