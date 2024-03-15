import express from "express"
import Customer from "../models/customer.model.js"
const router = express.Router()

router.post('/', async(req,res)=>{
    try {
        const {name} = req.body

        const newCustomer = new Customer({name})

        const savedCustomer = await newCustomer.save()

        res.json(savedCustomer)
    } catch (error) {
        console.error(error)
        res.status(500).send()
    }
})

export default router