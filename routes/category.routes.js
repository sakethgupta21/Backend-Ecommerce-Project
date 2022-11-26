

const { requestValidator , authjwt } = require("../middlewares");
const categoryController = require("../controllers/category.controller")


module.exports = function(app){

    // Routes to add a category
    app.post("/ecomm/api/v1/categories",[requestValidator.validateCategoryRequest , authjwt.verifyToken , authjwt.isAdmin],categoryController.create)

    //Route to get all Categories
    app.get("/ecomm/api/v1/categories", categoryController.findAll)
    
    //Route to find only one category by ID
    app.get("/ecomm/api/v1/categories/:id", categoryController.findOne)
     
    //Route to Delete one category by its ID
    app.delete("/ecomm/api/v1/categories/:id" ,[authjwt.verifyToken , authjwt.isAdmin] , categoryController.delete)

    //Route to Update any Data in that Category by its Id 
    //Here we are adding Validators for the Data
    app.put("/ecomm/api/v1/categories/:id" , [requestValidator.validateCategoryRequest , authjwt.verifyToken , authjwt.isAdmin],categoryController.update)


}