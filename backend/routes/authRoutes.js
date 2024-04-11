import express from "express";
// Make sure the path is correct and matches the named export
import { signin, signup, logout, userProfile} from "../controllers/authController.js";
import { isAuthenticated } from '../middleware/auth.js'

const router = express.Router();

// Auth routes
// /api/signup
router.post('/signup', signup);

// /api/signin
router.post('/signin', signin);

// /api/logout
router.get('/logout', logout);

// /api/myProfile
router.get('/myProfile', isAuthenticated, userProfile)

export default router;


