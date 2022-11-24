

module.exports = (sequelize, Sequelize) => {
  
    let Category = sequelize.define("category", {
     name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    }
    },{
      tableName: "categories"
    });
 
 //Automatically columns like , id , createdAt , updatedAt will be created by Sequelize
   return Category;

}

