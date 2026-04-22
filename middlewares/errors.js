const errors = (err, req, res, next) => {
  let code = 500;
  let msg = "Internal server error";

  console.log(err);
  if (err.name === "SequelizeValidationError") {
    code = 400;
    msg = err.errors[0].message;
  } else if (err.name === "SequelizeUniqueConstraintError") {
    code = 400;
    msg = err.errors[0].message;
  } else if (err.name === "InvalidInput") {
    code = 401;
    msg = "Invalid email/password";
  } else if (err.name === "JsonWebTokenError") {
    code = 401;
    msg = "You must login first";
  } else if (err.name === "TokenExpiredError") {
    code = 401;
    msg = "Token expired, please login again";
  } else if (err.name === "InvalidToken") {
    code = 400;
    msg = "Invalid token";
  } else if (err.name === "NotFound") {
    code = 404;
    msg = "Data not found";
  } else if (err.name === "Forbidden") {
    code = 403;
    msg = "You're not authorized";
  } else if (err.name === "AlreadyExists") {
    code = 409;
    msg = "Song already in favorites";
  } else if (err.name === "InvalidStatus") {
    code = 400;
    msg = "Invalid status value";
  } else if (err.name === "InvalidQuery") {
    code = 400;
    msg = err.message || "Query parameter q is required";
  } else if (err.name === "ValidationError") {
    code = 400;
    msg = err.message || "Validation error";
  }

  res.status(code).json({ message: msg });
};

module.exports = errors;
