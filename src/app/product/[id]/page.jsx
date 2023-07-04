import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import ProductReview from '../components/ProductReview';
import { url } from '@/utils/api';

async function Page({ params }) {
  const res = await fetch(`${url}api/products/${params.id}`, {
    next: { revalidate: 10 },
  });

  const product = await res.json();

  console.log(product);
  return (
    <div className='px-4'>
      <Link className='btn btn-light my-3' href='/'>
        Go back
      </Link>
      <ProductCard product={product} />
      <ProductReview reviews={product.reviews} />
    </div>
  );
}

export default Page;
