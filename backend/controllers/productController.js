const Product = require("../models/productModel");

// ONLY ADMIN
const createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({ success: true, product });
};

const getAllProducts = async (req, res, next) => {
  try {
    const data = await Product.find();
    res.status(200).json({ status: "true", data });
  } catch (error) {
    res.status(500).send({ status: true, "All data": "fail" });
    console.error(error);
  }
};
// For Update in DB
const updateProducts = async (req, res, next) => {
  try {
    // const { id } = req.params;
    let product = await Product.findById(req.params.id);
    if (!product) {
      return req.status(500).json({ success: false, message: "Product not found" });
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({ status: "true", product });
  } catch (error) {
    res.status(500).send({ status: false, "Update Product API": "Update Product API Fail" });
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const data = await Product.findById(req.params.id);
    if (!data) {
      return req.status(500) .json({ success: false, message: "Product not found" });
    }
    await data.remove();
    res.status(200).json({ status: "true", message: "Product Remove ", data });
  } catch (error) {
    res.status(500).send({ status: false, "Update Product API": "Update Product API Fail" });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  updateProducts,
  deleteProduct,
};
