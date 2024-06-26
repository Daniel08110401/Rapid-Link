import JobType from "../models/jobTypeModel.js";
import ErrorResponse from "../utils/errorResponse.js";


// Create Job Type //
//=================//
export const createJobType = async(req, res, next) => {
    try {
        const jobType = await JobType.create({
            jobTypeName : req.body.jobTypeName,
            user: req.user.id
        });
        res.status(201).json({
            success: true,
            jobType
        });
    } catch (error) {
        next(error);
    };
};


// Get all job categories //
//==================//
export const allJobType = async(req, res, next) => {
    try {
        const jobType = await JobType.find();
        res.status(200).json({
            success: true,
            jobType
        })
        
    } catch (error) {
        next(error)
    }
};


// Update Job Type //
//=================//
export const updateJobtype = async(req, res, next) => {
    try {
        
    } catch (error) {
        
    }
};


// Delete Job Type//
//================//
export const deleteJobType = async(req, res, next) => {
    try {
        
    } catch (error) {
        
    }
};