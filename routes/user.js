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
    const {id} = req.params;
    const user = await User.findByPk(id);
    res.json({
        message: `user with id of ${id}`,
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
    const count = await ClothingItem.count({
        where: {
            userId: id
        }
    })
    res.json({
        message: "list of user's clothes",
        items: items,
        count: count
    })
})

module.exports = {
    userRouter
}