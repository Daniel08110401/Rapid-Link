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
            // if password doesn't match, return the error
            return next(new ErrorResponse("invalid credentials", 400));
        }

        // Send out the tokens: user, statuscode, response
        sendTokenResponse(user, 200, res);
        
        
    } catch (error) {
        next(error);
    }
};

const sendTokenResponse = async (user, codeStatus, res) => {
    const token = await user.getJwtToken();
    res
    .status(codeStatus)
        .cookie('token', token, {maxAge: 60 * 60 * 1000, httpOnly: true})
        .json({sucess: true, token, user})
}