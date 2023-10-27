const { Router } = require('express');

const Products = require("./products");


const router = Router();
router.use("/", Products);
module.exports = router;