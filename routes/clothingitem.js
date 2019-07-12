const express = require('express');
const clothingitemRouter = express.Router();
const {ClothingItem} = require('../models/index');

clothingitemRouter.get('/', async (req, res) => {
    const items = await ClothingItem.findAll();
    res.json({
        message: "list of clothes",
        items: items
    })
})

clothingitemRouter.get('/:id', async (req, res) => {
    const item = await ClothingItem.findOne({
        where: {
            id: req.params.id
        }
    });
    res.json({
        message: `clothing item with id of ${req.params.id}`,
        item: item
    })
})

clothingitemRouter.post('/create', async (req, res) => {
    const newItem = await ClothingItem.create(req.body);
    res.json({
        newItem: newItem
    })
})

clothingitemRouter.put('/:id', async (req, res) => {
    const updateItem = {
        name: req.body.name,
        type: req.body.type,
        color: req.body.color
    }
    let update = await ClothingItem.update(updateItem, {
        where: {
            id: req.params.id
        }
    })
    res.json({update})
})

clothingitemRouter.delete('/:id', async (req, res) => {
    let deleteItem = await ClothingItem.destroy({
        where: {
            id: req.params.id
        }
    })
    res.json({
        message: "deleted clothing item",
        data: req.params
    })
})

module.exports = {
    clothingitemRouter
}