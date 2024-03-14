import express from "express";
// Make sure the path is correct and matches the named export
import { signup } from "../controllers/authController.js";

const router = express.Router();

// Auth routes
// /api/signup
router.post('/signup', signup);

export default router;


