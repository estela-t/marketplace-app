import Product from './Product'
import SearchForm from './SearchForm'
import useMockFetch from '../hooks/useMockFetch'

const Products = () => {
  const { data: products, isLoading, isSuccess, error } = useMockFetch('api/products')

  console.log(products)

  return (
    <>
      <SearchForm />
      {isLoading ? (
        <>Getting products...</>
      ) : isSuccess ? (
        <ul className="grid grid-cols-1 gap-x-4 gap-y-6 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-6">
          {products.map((product) => (
            <li key={product.id} className="col-span-1 max-w-[360px]">
              <Product product={product} />
            </li>
          ))}
        </ul>
      ) : (
        <>No Products available</>
      )}
    </>
  )
}

export default Products
