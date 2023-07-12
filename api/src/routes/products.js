const { Router } = require('express');
const router = Router();
const { productsGet, searchGet } = require('../controllers/productsController');

router.get("/products", productsGet);
router.get("/search", searchGet);

module.exports = router;
