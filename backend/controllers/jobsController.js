import Job from "../models/jobModel";
import ErrorResponse from "../utils/errorResponse";

//============//
// create job //
//============//
export default createJob = async(req, res, next) => {
    try {
        const job = await Job.create({
            company     : req.body.company,
            description : req.body.description,
            jobTitle    : req.body.jobTitle,
            jobType     : req.body.jobType,
            locaiton    : req.body.location,
            deadline    : req.body.deadline,
            available   : req.body.available,
            user        : req.body.user,
        });
        res.status(201).json({
            success: true,
            job
        });
    } catch (error) {
        next(error);
    };
};

// Single job
