import PageIndex from '@/components/Pagination';
import { url } from '@/utils/api';

async function HomeScreen({ searchParams: { keyword = '', page = 1 } }) {
  const res = await fetch(`${url}api/products?page=${page}&keyword=${keyword}`);
  const data = await res.json();
  const products = data.products;
  const params = { pages: data.pages, page: data.page };

  console.log(data);

  return (
    <>
      <h1>latest Product</h1>

      <PageIndex products={products} params={params} />
    </>
  );
}
export default HomeScreen;
