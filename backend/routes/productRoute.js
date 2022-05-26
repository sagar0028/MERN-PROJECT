const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  createProduct,
  updateProducts,
  deleteProduct,
} = require("../controllers/productController");

router.route("/products/new").get(createProduct);
router.route("/products").post(getAllProducts);
router.route("/product/:id").put(updateProducts);
router.route("/product/delete/:id").delete(deleteProduct);

module.exports = router;
