import User from '../models/userModel.js';
import ErrorResponse from '../utils/errorResponse.js';

export const allUsers = async(req, res, next) => {
    // enable pagination
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;
    const count = await User.find({}).estimatedDocumentCount();
    
    try{
        const users = await User.find().sort({ createdAt: -1}).select('-password')
            .skip(pageSize * (page - 1))
            .limit(pageSize)

        res.status(200).json({
            success: true,
            users,
            page,
            pages: Math.ceil(count / pageSize),
            count
        })
        next()
    }catch(error){
        return next(error);
    }
};


// show single user
export const singleUser = async(req, res, next) => {
    try{
        // req.params not param
        // const user = await User.findById(req.params.id);
        const user = await User.findById(req.query.id);
        res.status(200).json({
            success: true,
            user
        });
        // Calling next() here might not be necessary if this is the end of your middleware chain for this route
        next();
    } catch(error){
        return next(error);
    }
};


//edit user
export const editUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            success: true,
            user
        });
        next();

    } catch (error) {
        return next(error);
    }
};

//delete user
export const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id);
        res.status(200).json({
            success: true,
            message: "user deleted"
        });
        next();

    } catch (error) {
        return next(error);
    }
};