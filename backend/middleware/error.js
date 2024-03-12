// To handle errors
// Each encounter of errors will inform which error it is with the callstack

// for the file path, ensure to add .js
import ErrorResponse from '../utils/errorResponse.js';

// Log the imported module to the console
console.log(ErrorResponse);

// 'next' is to go to the next middleware
const errorHandler = (err, req, res, next) => {

    let error = { ...err };
    error.message = err.message;

    if (err.name === "CastError") {
        const message = `Resource not found ${err.value}`;
        error = new ErrorResponse(message, 404);
    }

    //Mongoose duplicate value
    if (err.code === 11000) {
        const message = "Duplicate field value entered";
        error = new ErrorResponse(message, 400);
    }

    //Mongoose validation error
    if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map(val => val.message).join('; ');
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "server error"
    })

}

// for ES6, its not module.exports
// use export default
export default errorHandler;