
const config = require("../configs/db.config")
const Sequelize = require("sequelize")

const seq = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect
    }
);

const db ={}

db.Sequelize = Sequelize;
db.sequelize = seq
db.role = require('./role.model.js')(db.sequelize,Sequelize)
db.user = require('./user.model.js')(db.sequelize, Sequelize)
db.category = require('./category.model.js')(db.sequelize, Sequelize)
db.product = require('./product.model.js')(db.sequelize, Sequelize)
db.cart = require('./cart.model.js')(db.sequelize, Sequelize)


// Establishing relationship between role and user : many to many

// User to Role -> One to Many
db.user.belongsToMany(db.role , {
    through : "user_roles",
    foreignKey: "userId"
})


// Role to User -> One to many
db.role.belongsToMany(db.user,{
    through: "user_roles",
    foreignKey: "roleId"
})


// Cart to Products -> Many to Many
db.cart.belongsToMany(db.product,{
    through: "cart_products",
    foreignKey: "cartId"
})


db.cart.hasMany(db.cart)

db.category.hasMany(db.product)
module.exports = db
