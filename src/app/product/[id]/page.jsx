import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import ProductReview from '../components/ProductReview';

async function Page({ params }) {
  const res = await fetch(`http://localhost:3000/api/products/${params.id}`);

  const product = await res.json();

  console.log(product);
  return (
    <div className='px-4'>
      <Link className='btn btn-light my-3' href='/'>
        Go back
      </Link>
      <ProductCard product={product} />
      <ProductReview />
    </div>
  );
}

export default Page;
