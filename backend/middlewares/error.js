class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddeleware = (err, req, res, next) => {
    err.message = err.message || "internal server Error";
    err.statusCode = err.statusCode || 500;
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message, 400)
    }
    if (err.name === "JsonWebTokenError") {
        const message = `JSon Web Token in Invalid. Try Again.`;
        err = new ErrorHandler(message, 400)
    }
    if (err.name === "TokenExpiredError") {
        const message = `JSon Web Token in Expired. Try to login.`;
        err = new ErrorHandler(message, 400)
    }
    if (err.name === "CastError") {
        const message = `Invalid ${err.path}`;
        err = new ErrorHandler(message, 400)
    }
    const errorMessage = err.errors ? Object.values(err.errors)
    .map(error => error.message)
    .join(" ") : err.message;
    res.status(err.statusCode).json({
        success: false,
        message: errorMessage
    })
};

export default ErrorHandler;