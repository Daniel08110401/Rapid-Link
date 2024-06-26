import ErrorResponse from '../utils/errorResponse.js';
import jwt from "jsonwebtoken";
import User from '../models/userModel.js';

// check if the user is authenticated (signed in)
export const isAuthenticated = async(req, res, next) => {
    const { token } = req.cookies;

    if(!token){
        return next(new ErrorResponse('Not authorized to access to this route', 401))
    };

    try{
        // verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decoded.id);
        next();
        
    }catch (error){
        return next(new ErrorResponse('Not authorized to access to this route', 401))
    };
};

// middleware for admin
export const isAdmin = async(req, res, next) => {
    if(req.user.role === 0){
        return next(new ErrorResponse('Access denied, you must an admin', 401))
    };

    next(); // go to the next middle ware which is 'allUsers'
}
