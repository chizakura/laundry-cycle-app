const express = require('express');
const washoptionRouter = express.Router();
const {WashOption} = require('../models/index');

washoptionRouter.get('/', async (req, res) => {
    const washoptions = await WashOption.findAll();
    res.json({
        message: "list of wash options",
        washoptions: washoptions
    })
})

washoptionRouter.get('/:id', async (req, res) => {
    const washoption = await WashOption.findByPk(req.params.id);
    res.json({
        message: `wash option with id of ${req.params.id}`,
        washoption: washoption
    })
})

module.exports = {
    washoptionRouter
}