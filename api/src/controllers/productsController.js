const productsController = {};
const { getAllProducts, searchProducts } = require('../services/productsService');

productsController.productsGet = async (req, res) => {
    try {
        res.status(200).json(await getAllProducts());
    } catch (error) {
        res.status(error.status || 404).json(error.massage);
    }
}

productsController.searchGet = async (req, res) => {
    try {
        const { tag_name, price_value, price_comparison, currentPage, perPage } = req.query;
        res.status(200).json(await searchProducts(tag_name, price_value, price_comparison, currentPage, perPage));
    } catch (error) {
        res.status(error.status || 404).json(error.massage);

    }
}

module.exports = productsController;