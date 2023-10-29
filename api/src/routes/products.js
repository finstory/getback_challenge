const { Router } = require("express");
const router = Router();
const { productsGet, searchGet } = require("../controllers/productsController");
const { validationSearchGet } = require("../middleware/validateMiddleware");

router.get("/products", productsGet);

//% QUERY : tag_name, price_value, price_comparison, current_page, per_page.
router.get("/search", validationSearchGet, searchGet);

module.exports = router;
