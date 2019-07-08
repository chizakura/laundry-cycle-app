const Sequelize = require('sequelize');

const db = new Sequelize({
    database: "laundry_cycle_db",
    dialect: "postgres"
})

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const ClothingItem = db.define('clothingitem', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING
    },
    color: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const WashOption = db.define('washoption', {
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cycle: {
        type: Sequelize.STRING,
        allowNull: false
    },
    waterTemp: {
        type: Sequelize.STRING,
        allowNull: false
    },
    canWash: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

const DryOption = db.define('dryoption', {
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    setting: {
        type: Sequelize.STRING,
        allowNull: false
    },
    level: {
        type: Sequelize.STRING,
        allowNull: false
    },
    canDry: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

User.hasMany(ClothingItem);
WashOption.hasMany(ClothingItem);
DryOption.hasMany(ClothingItem);
ClothingItem.belongsTo(User);
ClothingItem.belongsTo(WashOption);
ClothingItem.belongsTo(DryOption);

module.exports = {
    db,
    User,
    ClothingItem,
    WashOption,
    DryOption
}