const express = require('express');
const dryoptionRouter = express.Router();
const {DryOption} = require('../models/index');

dryoptionRouter.get('/', async (req, res) => {
    const dryoptions = await DryOption.findAll();
    res.json({
        message: "list of dry options",
        dryoptions: dryoptions
    })
})

dryoptionRouter.get('/:id', async (req, res) => {
    const dryoption = await DryOption.findByPk(req.params.id);
    res.json({
        message: `dry option with id of ${req.params.id}`,
        dryoption: dryoption
    })
})

module.exports = {
    dryoptionRouter
}