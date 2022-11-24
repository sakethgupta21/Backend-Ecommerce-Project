
const {requestValidator} = require("../middlewares")
const productController = require("../controllers/product.controller")

module.exports = function(app){

    app.post("/ecomm/api/v1/products",[requestValidator.validateProductRequest] , productController.create)

    app.get("/ecomm/api/v1/products", productController.findAll)

    app.get("/ecomm/api/v1/products/:id", productController.findOne)
     //Route to Delete one category by its ID
    app.delete("/ecomm/api/v1/products/:id"  , productController.delete)
 //Route to Update any Data in that Category by its Id 
    app.put("/ecomm/api/v1/products/:id" ,  [requestValidator.validateProductRequest] ,productController.update)

   app.get("ecomm/api/v1/categories/:categoryId/products",productController.getProductsUnderCategory)


}
