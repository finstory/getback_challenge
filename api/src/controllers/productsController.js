const productsController = {};
const { getAllProducts, searchProducts } = require('../services/productsService');

productsController.productsGet = async (req, res) => {
    try {
        res.status(200).json(await getAllProducts());
    } catch (error) {
        res.status(error.status || 404).json(error.payload || error.massage);
    }
}
productsController.searchGet = async (req, res) => {
    try {

        res.status(200).json(await searchProducts(req.query));
    } catch (error) {
        res.status(error.status || 404).json(error.payload || error.massage);
    }
}

module.exports = productsController;