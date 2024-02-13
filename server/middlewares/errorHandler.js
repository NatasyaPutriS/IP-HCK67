module.exports = function errorHandler(error, req, res, next) {
    let status = error.status || 500
    let message = error.message || "Internal Server Error"

    switch (error.name) {
        case "InvalidInput":
            status = 400;
            message = "Email / Password is Required";
            break;
        case "SequelizeUniqueConstraintError":
        case "SequelizeValidationError":
            status = 400;
            message = error.errors[0].message
            break;
        case "InvalidUser":
            status = 401;
            message = "Invalid Email / Password";
            break;
        case "Invalid Token":
        case "JsonWebTokenError":
            status = 401;
            message = "You are Not Authorized";
            break;
        case "Forbidden":
            status = 403;
            message = "You are not authorized";
            break;
        case "NotFound":
            status = 404;
            message = "Data Not Found"
            break
    }
    res.status(status).json({
        message
    })
}