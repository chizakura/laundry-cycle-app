const express = require('express');
const userRouter = express.Router();
const {User} = require('../models/index');

userRouter.get('/', async (req, res) => {
    const users = await User.findAll();
    res.json({
        message: "list of users",
        users: users
    })
})

userRouter.get('/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id)
    res.json({
        message: `user with id of ${req.params.id}`,
        user: user
    })
})

module.exports = {
    userRouter
}