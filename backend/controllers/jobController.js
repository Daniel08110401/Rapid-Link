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
export const singleJob = async (req, res, next) => {
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
export const showJobs = async (req, res, next) => {
    
    // Destructure keyword and cat from query for cleaner access
    const { keyword, cat, pageNumber } = req.query;

    // Search function //
    //=================//
    const keywordFilter = keyword ? {
        title: {
            $regex: new RegExp(keyword, 'i') // using RegExp constructor for dynamic patterns
        }
    } : {};

    // Filter function //
    const jobTypeCategory = await JobType.find({}, '_id'); // shorthand to only fetch _id
    const ids = jobTypeCategory.map(cat => cat._id); // using map to directly create ids array
    const categ = cat && cat !== '' ? cat : ids;

    // Pagination
    const pageSize = 5; // number of jobs per page
    const page = Number(pageNumber) || 1;

    try {
        const count = await Job.find({ ...keywordFilter, jobType: categ }).countDocuments();

        // .skip() : Skips the number of jobs that were displayed in the previous pages, thus allowing pagination
        // .limit() : Limits the number of jobs fetched to the pageSize
        const jobs = await Job
            .find({ ...keywordFilter, jobType: categ })
            .skip(pageSize * (page - 1))
            .limit(pageSize);


        res.status(200).json({
            success: true,
            jobs,
            page,
            pages : Math.ceil(count / pageSize),
            count,
        });
        
        // Log detailed information
        console.log({
            keywordFilter,
            categ,
            jobs,
            pageSize,
            skip: pageSize * (page - 1),
            page,
            count,
            ids
        });


    } catch (error) {
        next(error);
    };
};

// All jobs
export const allJobs = async (req, res, next) => {
    
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


