const { category } = require("../models")
const db = require("../models")


const Category = db.category

//POST : create and save a new Category
exports.create = (req,res)=>{
    let category ={
        name: req.body.name,
        description: req.body.description
    }

    Category.create(category)
     .then(category=>{
            console.log(" category Succesfully Got Inserted into the database")
            res.status(200).send(category)
    })
    .catch(err=>{
            console.log("Issue in Inserting the Category")
            res.status(500).send("Issue in Creating the category")
    })
    

}

//GET: Get the List of all catgories
exports.findAll=(req,res)=>{

    category.findAll()
    .then(data=>{
        console.log("category Successfully fetched from the Database")
        res.status(200).send(data)
    })
    .catch(err=>{
        res.status(500).send("Some error occured while retriving the Category")
    })
}


exports.findOne =(req, res)=>{
    const categoryId = req.params.id

    category.findByPk(categoryId)
    .then(category =>{
        //If a user sends in a id which is not present in DB
        if(!category){
            res.status(400).send("Please enter Valid Category")
        }

      res.status(200).send(category)
        
    })
    .catch(err => {
        res.status(500).send("Error Occured  while finding One of the Elements ")
    })
}

exports.delete=(req,res)=>{

    const categoryId =req.params.id

    Category.destroy({
        where:{
            id: categoryId
        }
    })
    .then(result => {
        res.status(200).send("Successfully Deleted the Category")
    })
    .catch(err=>{
        res.status(500).send("Some error occured while deleting the Category based on ID")
    })

}
    

exports.update=(req ,res)=>{

    const categoryId = req.params.id

    Category.update(req.body ,{
        where:{
            id :categoryId
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
        res.status(500).send("Some error occured while updating the Category")
    })
   
}