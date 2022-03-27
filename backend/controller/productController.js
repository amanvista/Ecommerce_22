const Product = require("../models/productModel")


// Admin Access 
exports.createProduct = async (req,res,next)=>{
    const product = await Product.create(req.body)
    res.status(201).json({
        success: true,
        product
    })
}
exports.getAllProducts = async (req,res)=>{
    const products = await Product.find();
    res.status(200).json({success:true,
    products
    })
}

//Update - Admin Page
// Update Product - Admin
exports.updateProduct = async (req, res, next)=>{
    let product = await Product.findById(req.params.id)
    if(!product){
        return next(new ErrorHandler("Product Not Found", 404))
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body,  
        {new: true, runValidators: true, useFindModify: false})

    res.status(200).json({
        success: true,
        product
    })
        
}