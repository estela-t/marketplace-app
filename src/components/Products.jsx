import { useEffect, useState } from 'react'
import Product from './Product'
import SearchForm from './SearchForm'
import useMockFetch from '../hooks/useMockFetch'

const Products = () => {
  const [products, setProducts] = useState()
  const [filtered, setFiltered] = useState(false)
  const { data: productList, status } = useMockFetch('api/products')

  const handleSearch = (query) => {
    setFiltered(true)
    filterProducts(query)
  }

  const filterProducts = (query) => {
    setFiltered(true)
    const filteredProducts = productList.filter((product) => product.product.toLowerCase().includes(query.toLowerCase()))
    setProducts(filteredProducts)
  }

  const handleClear = () => {
    setFiltered(false)
    setProducts(productList)
  }

  useEffect(() => {
    if (status === 'success') {
      setProducts(productList)
    }
  }, [status])

  return (
    <>
      <SearchForm onSearch={handleSearch} onClear={handleClear} />
      {status === 'fetching' ? (
        <p>Getting products...</p>
      ) : products !== undefined ? (
        <ul className="grid grid-cols-1 gap-x-4 gap-y-6 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-6">
          {products.map((product) => (
            <li key={product.id} className="col-span-1 max-w-[360px] cursor-pointer">
              <Product product={product} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No Products available</p>
      )}
      {filtered && products.length === 0 && <p>No matching products were found.</p>}
    </>
  )
}

export default Products
