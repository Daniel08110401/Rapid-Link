import JobType from "../models/jobTypeModel";
import ErrorResponse from "../utils/errorResponse";

//================//
// Create Job Type//
//================//
export const createJobType = async(req, res, next) => {
    try {
        const jobType = await JobType.create({
            jobTypename : req.body.jobTypename,
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

//================//
// All Job Category//
//================//
export const allJobType = async(req, res, next) => {
    try {
        
    } catch (error) {
        
    }
};

//================//
//Update Job Type //
//================//
export const updateJobtype = async(req, res, next) => {
    try {
        
    } catch (error) {
        
    }
};

//================//
// Delete Job Type//
//================//
export const deleteJobType = async(req, res, next) => {
    try {
        
    } catch (error) {
        
    }
};