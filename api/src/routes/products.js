const { Router } = require('express');
const router = Router();
const { productsGet, searchGet } = require('../controllers/productsController');
const { validationSearchGet } = require('../middleware/validateMiddleware');

router.get("/products", productsGet);
router.get("/search", validationSearchGet, searchGet);

module.exports = router;
