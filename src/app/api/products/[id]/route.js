import Product from '@/models/productModel';

export async function GET(req) {
  const product = await Product.findById(req.params.id).populate('reviews');
  res.status(200).json({
    status: 'success',
    product,
  });
}
