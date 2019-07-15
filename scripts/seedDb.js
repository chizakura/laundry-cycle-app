const {User, ClothingItem, WashOption, DryOption} = require('../models/index');
const {washData} = require('./washoptions');
const {dryData} = require('./dryoptions');

const seed = async () => {
    try {
        const admin = await User.create({
            name: "Linda",
            email: "linda@fakemail.com",
            password: "helloworld"
        })

        const washOptions = washData.options.map(option => ({
            name: option.name,
            type: option.type,
            cycle: option.cycle,
            waterTemp: option.waterTemp,
            canWash: option.canWash,
            about: option.about
        }));

        await WashOption.bulkCreate(washOptions);

        const dryOptions = dryData.options.map(option => ({
            name: option.name,
            type: option.type,
            setting: option.setting,
            heatLevel: option.heatLevel,
            canTumbleDry: option.canTumbleDry,
            about: option.about
        }));

        await DryOption.bulkCreate(dryOptions);

        const itemOne = await ClothingItem.create({
            description: "My favorite shirt",
            type: "shirt",
            shadeCategory: "mixed",
            material: "cotton",
            brand: "Gap",
            washoptionId: 5,
            dryoptionId: 2
        })

        const itemTwo = await ClothingItem.create({
            description: "Grey blouse",
            type: "blouse",
            shadeCategory: "light",
            material: "cotton",
            brand: "H&M",
            washoptionId: 2,
            dryoptionId: 10
        })

        const itemThree = await ClothingItem.create({
            description: "Charcoal jeans",
            type: "pants",
            shadeCategory: "dark",
            material: "cotton",
            brand: "Target",
            washoptionId: 10,
            dryoptionId: 5
        })

        const itemFour = await ClothingItem.create({
            description: "wool cardigan",
            type: "cardigan",
            shadeCategory: "light",
            material: "wool",
            brand: "Muji",
            washoptionId: 16,
            dryoptionId: 16
        })

        await itemOne.setUser(admin);
        await itemTwo.setUser(admin);
        await itemThree.setUser(admin);
        await itemFour.setUser(admin);
    } catch (err) {
        console.log("Could not create rows", err.message);
    } finally {
        process.exit();
    }
}

seed();