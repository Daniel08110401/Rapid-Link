import express from 'express';
import { createJob, updateJob, singleJob, allJobs, showJobs} from "../controllers/jobController.js";
import { isAdmin, isAuthenticated } from "../middleware/auth.js";

const router = express.Router() 

// Job routes //
//============//

// Create job //
// /api/job/create
router.post("/job/create", isAuthenticated, isAdmin, createJob);

// Update job //
// /api/job/update
router.put("/job/update/:job_id", isAuthenticated, isAdmin, updateJob);

// Show single job //
// /api/job/id
router.get("/job/:id", singleJob);

// Show jobs //
// /api/jobs/show
router.get("/jobs/show", showJobs);

// All job //
// /api/jobs
router.get("/jobs", allJobs)



export default router;