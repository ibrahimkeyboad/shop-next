import PageIndex from '@/components/Pagination';

async function HomeScreen({ searchParams: { keyword, page } }) {
  const res = await fetch(
    `http://localhost:3000/api/products?page=${page}&keyword=${keyword}`
  );
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
