module.exports = (sequelize, Sequelize) => {
  
    let Product = sequelize.define("products", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    },
    cost:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
    },{
        tableName: "products"
    });
 
 //Automatically columns like , id , createdAt , updatedAt will be created by Sequelize
   return Product;

}