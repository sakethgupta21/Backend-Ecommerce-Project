
const db = require("../models")
const Category = db.category;

const validateCategoryRequest = (req,res,next) => {
    // {name ,Description}
    if(!req.body.name){
        res.status(400).send("name of the Category can't be Empty")
    }

    next();

}

const validateProductRequest = (req,res,next)=>{
  //{name , description , categoryId}

  //1. product name passed is not null
  //2. product have a category id passed to it all the time
  // where the product name is not present in the requested body 
    if(!req.body.name){
    
        res.status(400).send("Name of the category can't be empty")
        return;
    }

    if(req.body.categoryId){

       Category.findByPk(req.body.categoryId)
       .then(category =>{
        if(!category){
            res.status(400).send("Category Id that is passed is not available")
            return;

        }
        next();
       })
        .catch(err=>{
            res.status(500).send("Some internal error while fetching the product detail")
        })
       
    }else{
        res.status(400).send("Category ID is cannot NULL")
    }
}



module.exports={
    validateCategoryRequest : validateCategoryRequest,
    validateProductRequest: validateProductRequest
}