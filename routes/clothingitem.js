const express = require('express');
const clothingitemRouter = express.Router();
const {ClothingItem, WashOption, DryOption} = require('../models/index');

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
        }, include: [WashOption, DryOption]
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
        description: req.body.description,
        type: req.body.type,
        shadeCategory: req.body.shadeCategory,
        material: req.body.material,
        brand: req.body.brand
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