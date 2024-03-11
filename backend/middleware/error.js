// To handle errors
// Each encounter of errors will inform which error it is with the callstack

const ErrorResponse = require("../utils/errorResponse");

// next is to go to the next middleware
const errorHandler = (req, res, next) => {
    let error = { ...err };

    error.message = err.message;

    if (err.name === "CastError") {
        const message = `Ressource not found ${err.value}`;
        error = new ErrorResponse(message, 404);
    };

    //Mongoose duplicate value
    if (err.code === 11000) {
        const message = "Duplicate field value entered";
        error = new ErrorResponse(message, 400);
    };

    //Mongoose validation error
    if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map(val => ' ' + val.message);
        error = new ErrorResponse(message, 400);
    };

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "server error"
    });
};

module.exports = errorHandler;