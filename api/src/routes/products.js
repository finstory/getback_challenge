const { Router } = require('express');
const router = Router();
const { productsGet, searchGet } = require('../controllers/productsController');
const { validationSearchGet } = require('../middleware/validateMiddleware');

router.get("/products", productsGet);

router.get("/search", validationSearchGet, searchGet);
//% Query's: {tag_name, price_value, price_comparison, current_page, per_page}

module.exports = router;
