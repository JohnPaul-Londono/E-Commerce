import express from 'express'
import asyncHandler from 'express-async-handler'

const router = express.Router()
import Product from "../models/productModel.js"

//@desc fetch all products
//@route     GET/API/products
//@ACCESS   public route
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
}))


//@desc fetch single product
//@route     GET/API/products/:id
//@ACCESS   public route
//this error handles correct formatted id's
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) { 
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product Not Found')
    }
}))


export default router