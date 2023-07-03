const Product = require("@/models/productModel");

async function GET(req) {
  const page = +req.query.page || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};
  const count = await Product.countDocuments({ ...keyword });
  const products = await Product.find({ ...keyword })
    .limit(limit)
    .skip(skip);
  res.status(200).json({
    products,
    pages: Math.ceil(count / limit),
    page,
  });
}


