const productsController = {};
const { sendResponse, sendError } = require("../helpers/managerController");
const {
  getAllProducts,
  searchProducts,
} = require("../services/productsService");

productsController.productsGet = async (req, res) => {
  try {
    const result = await getAllProducts();
    sendResponse(res, 200, result);
  } catch (e) {
    sendError(res, e);
  }
};

productsController.searchGet = async (req, res) => {
  try {
    // const { tag_name, price_value, price_comparison, current_page, per_page } =
    const result = await searchProducts(req.query);
    sendResponse(res, 200, result);
  } catch (e) {
    sendError(res, e);
  }
};

module.exports = productsController;
