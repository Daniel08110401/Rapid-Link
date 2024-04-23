import Job from "../models/jobModel.js";
import JobType from "../models/jobTypeModel.js";
import ErrorResponse from "../utils/errorResponse.js";

// Create job //
//============//
export const createJob = async(req, res, next) => {
    try {
        const job = await Job.create({
            company     : req.body.company,
            title       : req.body.title,
            description : req.body.description,
            jobType     : req.body.jobType,
            location    : req.body.location,
            deadline    : req.body.deadline,
            available   : req.body.available,
            user        : req.user.id,
        });

        res.status(201).json({
            success: true,
            job
        });
    } catch (error) {
        next(error);
    };
};

// Update single job //
//=================//
export const updateJob = async(req, res, next) => {
    try {
        const job = await Job.findByIdAndUpdate(
            req.params.job_id, 
            req.body, 
            {new: true}
        ).populate('jobType', 'jobTypeName').populate('user', 'firstName lastName');
        
        res.status(200).json({
            success: true,
            job
        });
    } catch (error) {
        next(error);
    };
};


// Show single job //
//=================//
export const singleJob = async(req, res, next) => {
    try {
        const job = await Job.findById(req.params.id);

        res.status(200).json({
            success: true,
            job
        });
    } catch (error) {
        next(error);
    };
};

// Show  jobs //
//=================//
export const showJobs = async(req, res, next) => {
    
    // Pagination
    const pageSize = 5; // number of jobs for each page
    const page = Number(req.query.pageNumber) || 1;
    const count = await Job.find({}).estimatedDocumentCount();

    // Search function
    const keyword = req.query.keyword ? {
        title: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {};
    
    try {
        // .skip() : Skips the number of jobs that were displayed in the previous pages, thus allowing pagination
        // .limit() : Limits the number of jobs fetched to the pageSize
        const jobs = await Job
            .find({...keyword})
            .skip(pageSize * (page - 1))
            .limit(pageSize)
        ;

        res.status(200).json({
            success: true,
            jobs,
            page,
            pages : Math.ceil(count / pageSize),
            count
        });
    } catch (error) {
        next(error);
    };
};

// All jobs
export const allJobs = async(req, res, next) => {
    
    try {
        const jobs = await Job.find();

        res.status(200).json({
            success: true,
            jobs,
        });
    } catch (error) {
        next(error);
    };
};


