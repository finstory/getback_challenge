const getAllProductsFromHeavenStore = require('../externalShops/heavenStore');
const getAllProductsFromMagicStore = require('../externalShops/magicStore');

const { Op } = require('sequelize');
const { Product, conn } = require('../db');
const throwError = require('../helpers/customError');
const productsService = {};


productsService.performInitialDataDump = async () => {
    try {

        conn.afterSync(async () => {
            const count = await Product.count();

            if (count === 0) {

                const heavenStore = await getAllProductsFromHeavenStore();
                const magicStore = await getAllProductsFromMagicStore();

                const allProducts = [
                    ...heavenStore,
                    ...magicStore,
                ];

                await Product.bulkCreate(allProducts);

                console.log("Initial Bulk successfully, all products added to database.");
            }
            else return;
        });

    } catch (error) {
        console.log(error.massage);
    }
}

productsService.getAllProducts = async () => {
    try {
        const products = await Product.findAll();

        if (products.length > 0) return products;
        else throwError("missing", 404, "Products was not found.");

    } catch (error) { throw (error); };
}


productsService.searchProducts = async (tag_name = "", price_value = 0, price_comparison = "", current_page = 1, per_page = 10) => {
    try {
        price_value = parseFloat(price_value);
        current_page = parseFloat(current_page);
        per_page = parseFloat(per_page);

        const filter = {
            search_text: { [Op.iLike]: `%${tag_name}%` },
        };

        switch (price_comparison) {
            case '>': filter.price = { [Op.gt]: price_value }; break;
            case '<': filter.price = { [Op.lt]: price_value }; break;
            case '=': filter.price = { [Op.eq]: price_value }; break;
            default: break;
        }

        const totalPage = await Product.count({ where: filter });

        const pagesTotal = Math.ceil(totalPage / per_page);

        const products = await Product.findAll({
            where: filter,
            limit: per_page,
            offset: (current_page - 1) * per_page,
        });

        if (!products) throwError("missing", 404, "Products was not found.");

        return {
            products,
            pagesTotal,
        };

    } catch (error) {
        throw (error);
    }
};

module.exports = productsService;