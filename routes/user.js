const express = require('express');
const userRouter = express.Router();
const {User, ClothingItem, WashOption, DryOption} = require('../models/index');

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

userRouter.get('/:id/items', async (req, res) => {
    const {id} = req.params;
    const items = await ClothingItem.findAll({
        where: {
            userId: id
        }, include: [WashOption, DryOption]
    });
    res.json({
        message: "list of user's clothes",
        items: items
    })
})

module.exports = {
    userRouter
}