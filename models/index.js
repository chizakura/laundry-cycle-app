const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const buf = Buffer.from(`SALT_KEY=${process.env.BCRYPT_SALT_ROUNDS_NUM}`);
const config = dotenv.parse(buf);

const BCRYPT_SALT_ROUNDS = parseInt(config.SALT_KEY);

// const db = new Sequelize({
//     database: "laundry_cycle_db",
//     dialect: "postgres"
// })

const db = new Sequelize(process.env.DATABASE_URL , {
    dialect: 'postgres'
  });

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

User.beforeCreate(async (user, options) => {
    const hashedPassword = await bcrypt.hash(user.password, BCRYPT_SALT_ROUNDS);
    user.password = hashedPassword;
})

const ClothingItem = db.define('clothingitem', {
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    shadeCategory: {
        type: Sequelize.STRING,
        allowNull: false
    },
    material: Sequelize.STRING,
    brand: Sequelize.STRING
})

const WashOption = db.define('washoption', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
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
    },
    about: Sequelize.TEXT
})

const DryOption = db.define('dryoption', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    setting: {
        type: Sequelize.STRING,
        allowNull: false
    },
    heatLevel: {
        type: Sequelize.STRING,
        allowNull: false
    },
    canTumbleDry: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    about: Sequelize.TEXT
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