
//const { product } = require("../models")
const db = require("../models") //index.js
const Op = db.Sequelize.Op;
const Product = db.product

exports.create = (req,res)=>{

    let product ={
        name: req.body.name,
        description: req.body.description,
        cost: req.body.cost,
        categoryId: req.body.categoryId
    }

    Product.create(product)
    .then(product =>{
        console.log("Product has been inserted into the DB")
        res.status(200).send(product)
        
    })
    .catch(err => {
        console.log("Issue in Inserting the Product")
        res.send(500).send("Issue in Creating the products")
    })
}

exports.findAll=(req,res)=>{
  
  let productName = req.query.name;  
  let minCost = req.query.minCost; //80000
  let maxCost = req.query.maxCost;//90000

  //get all Products
  // Select * from Products
   
  let promise;
    if(productName){

       promise = Product.findAll({
            where:{
              name:productName
            }
        })
    }else if(minCost && maxCost){
         promise = Product.findAll({
            where:{
                cost:{
                    [op.gte] : minCost,
                    [op.lte] : maxCost
                }
            }
        })
    }else if(minCost){
        promise = Product.findAll({
            where:{
                 cost:{
                   [op.gte] : minCost, 
                }
            }
        })
    
    }else if(maxCost){
        promise = Product.findAll({
            where:{
                cost:{
                    [op.lte]: maxCost,
                }
            }
        })
    }else{
        //no query params have been passed
        promise = Product.findAll()
    }
  
    Product.findAll()
    .then(data=>{
        console.log("Product Successfully fetched from the Database")
        res.status(200).send(data)
    })
    .catch(err=>{
        res.status(500).send("Some error occured while retriving the Products")
    })
}


exports.findOne =(req, res)=>{
    const productId = req.params.id

    product.findByPk(productId)
    .then(product =>{
        //If a user sends in a id which is not present in DB
        if(!product){
            res.status(400).send("Please enter Valid Products")
        }

      res.status(200).send(product)
        
    })
    .catch(err => {
        res.send(500).send("Error Occured  while finding One of the Elements ")
    })
}

exports.delete=(req,res)=>{

    const productId =req.params.id;

    Product.destroy({
        where:{
            id: productId
        }
    })
    .then(result => {
        res.status(200).send("Successfully Deleted the Product")
    })
    .catch(err=>{
        res.status(500).send("Some error occured while deleting the Products based on Id")
    })

}
    

exports.update=(req ,res)=>{

    const productId = req.params.id

    Product.update(req.body ,{
        where:{
            id :productId
        }
    })
    .then(num =>{
        if(num == 1){
            res.send("Updation successful")
        }else{
            res.send("Could not Update")
        }
    })
    .catch(err=>{
        res.status(500).send("Some error occured while updating the Products")
    })
   
}

exports.getProductsUnderCategory =(req, res)=>{
    const categoryId = req.params.categoryId;

    Product.findAll({
        where:{
            categoryId: categoryId
        }
    })
    .then(products =>{
        res.status(200).send(products)

    })
    .catch(err=>{
        res.status(500).send("Some internal error while fetching the products based on category Id")
    })
}