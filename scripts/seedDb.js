const {User, ClothingItem, WashOption, DryOption} = require('../models/index');

const seed = async () => {
    try {
        const admin = await User.create({
            name: "Linda",
            email: "linda@fakemail.com",
            password: "helloworld"
        })

        const item = await ClothingItem.create({
            name: "My favorite shirt",
            type: "t-shirt",
            color: "dusty rose"
        })

        const washOption1 = await WashOption.create({
            type: "machine wash",
            cycle: "normal",
            waterTemp: "any",
            canWash: true
        })

        const washOption2 = await WashOption.create({
            type: "hand wash",
            cycle: "none",
            waterTemp: "any",
            canWash: false
        })

        const washOption3 = await WashOption.create({
            type: "machine wash",
            cycle: "any",
            waterTemp: "cold",
            canWash: true
        })

        const washOption4 = await WashOption.create({
            type: "machine wash",
            cycle: "permanent press",
            waterTemp: "cold",
            canWash: true
        })

        const washOption5 = await WashOption.create({
            type: "machine wash",
            cycle: "gentle",
            waterTemp: "cold",
            canWash: true
        })

        const dryOption1 = await DryOption.create({
            type: "tumble dry",
            setting: "normal",
            level: "any",
            canDry: true
        })

        const dryOption2 = await DryOption.create({
            type: "tumble dry",
            setting: "normal",
            level: "medium heat",
            canDry: true
        })

        const dryOption3 = await DryOption.create({
            type: "tumble dry",
            setting: "normal",
            level: "low heat",
            canDry: true
        })

        const dryOption4 = await DryOption.create({
            type: "line dry",
            setting: "none",
            level: "any",
            canDry: false
        })

        await item.setUser(admin);
        await item.setWashoption(washOption5);
        await item.setDryoption(dryOption3);
    } catch (err) {
        console.log("Could not create rows", err.message);
    } finally {
        process.exit();
    }
}

seed();