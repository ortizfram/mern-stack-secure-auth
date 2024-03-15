import express from "express";
import { loggedIn, login, logout, signup } from "../controllers/auth.controller.js";
const router = express.Router();

// register
router.post("/signup", signup);
// login
router.post('/login', login)
// logout
router.get('/logout', logout)
// loggedIn check
router.get('/loggedIn', loggedIn);

export default router;
