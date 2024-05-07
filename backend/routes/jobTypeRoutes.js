import express from "express";
import { createJobType, allJobType } from "../controllers/jobTypeController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

// Job type routes //
//=================//

// /api/type/create
// router.post('/type/create', isAuthenticated, createJobType);

// as the user sign in/out feature is not created yet, remove the isAuthenticated
router.post('/type/create', createJobType);


// /api/type/jobs
// router.get('/type/jobs', isAuthenticated, allJobType);

// as the user sign in/out feature is not created yet, remove the isAuthenticated
router.get('/type/jobs', allJobType);


export default router;