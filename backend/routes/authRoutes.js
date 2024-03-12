import express from "express";
// Make sure the path is correct and matches the named export
import { signin } from "../controllers/authController.js";

const router = express.Router();

// Auth routes
router.get('/', signin);

export default router;


