import express from "express";
import Customer from "../models/customer.model.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// create customer
router.post("/", auth, async (req, res) => {
  try {
    const { name } = req.body;

    const newCustomer = new Customer({ name });

    const savedCustomer = await newCustomer.save();

    res.json(savedCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});

//  get customers.
router.get("/", auth, async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});

export default router;
