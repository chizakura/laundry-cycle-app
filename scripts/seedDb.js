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

        const item = await ClothingItem.create({
            name: "My favorite shirt",
            type: "t-shirt",
            colorShade: "mixed",
            washoptionId: 5,
            dryoptionId: 2
        })

        await item.setUser(admin);
    } catch (err) {
        console.log("Could not create rows", err.message);
    } finally {
        process.exit();
    }
}

seed();