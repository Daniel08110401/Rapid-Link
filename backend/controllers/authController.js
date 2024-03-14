import User from "../models/userModel.js"
import ErrorResponse from "../utils/errorResponse.js";

export const signup = async (req, res, next) => {
    const {email} = req.body;
    const userExist = await User.findOne({email});
    if (userExist) {
        return next(new ErrorResponse("E-mail already registred", 400));
    }
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            success: true,
            user
        })
    } catch (error) {
        next(error);
    }
}



export const signin = async (req, res) => {
    res.send("Hello from Node Js");
    try {
        const { email, password } = req.body;
        // sign in validation
        if (!email) {
            return next(new ErrorResponse("please add an email", 403));
        }
        if (!password) {
            return next(new ErrorResponse("please add a password", 403));
        }

        // email validation
        const user = await User.findOne({ email });
        if (!user) {
            return next(new ErrorResponse("invalid credentials", 400));
        }
        //check password
        const isMatched = await user.comparePassword(password);
        if (!isMatched) {
            return next(new ErrorResponse("invalid credentials", 400));
        }
        
        
    } catch (error) {
        next(error);
    }
};
