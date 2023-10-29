const throwError = require("../helpers/customError");
const { sendError } = require("../helpers/managerController");
const { isString, isNumber } = require("../helpers/regexValidation");

const middleware = {};

middleware.validationSearchGet = (req, res, next) => {
  try {
    const {
      tag_name = "",
      price_value = 0,
      price_comparison = "",
      current_page = 1,
      per_page = 10,
    } = req.query;

    const type_of_price_comparison = ["<", ">", "=", ""];

    if (
      isString(tag_name) &&
      isNumber(price_value) &&
      isNumber(current_page) &&
      isNumber(per_page) &&
      type_of_price_comparison.includes(price_comparison)
    )
      next();
    else return throwError("data_invalid", 401, "You data is invalid.");
  } catch (error) {
    sendError(res, error);
  }
};

module.exports = middleware;
