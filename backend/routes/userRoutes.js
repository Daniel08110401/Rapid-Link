import express from "express";
// Make sure the path is correct and matches the named export
import { allUsers } from "../controllers/userController.js";
import { isAuthenticated } from '../middleware/auth.js'

const router = express.Router();

// User routes

// /api/myProfile
router.get('/allusers', isAuthenticated, allUsers)

export default router;