import { useEffect, useState } from 'react'
import Product from './Product'
import SearchForm from './SearchForm'
import useMockFetch from '../hooks/useMockFetch'
import CompareDialog from './dialogs/CompareDialog'

const Products = () => {
  const [products, setProducts] = useState([])
  const [filtered, setFiltered] = useState(false)
  const [selectedProducts, setSelectedProducts] = useState([])
  const [showCompareDialog, setShowCompareDialog] = useState(false)

  const { data: productList, status } = useMockFetch('api/products')

  const handleSearch = (query) => {
    filterProducts(query)
  }

  const filterProducts = (query) => {
    // set our state to indicate we are searching for products
    setFiltered(true)
    // find just the products where our query matches part of the product name
    const filteredProducts = productList.filter((product) => product.product.toLowerCase().includes(query.toLowerCase()))
    setProducts(filteredProducts)
  }

  const handleClear = () => {
    setFiltered(false)
    setProducts(productList)
  }

  const handleProductSelect = (event) => {
    const productId = parseInt(event.target.id)

    // depending on what we want to do with these selections, we could also look for our id in "products" and put the product itself on the selectedProducts state
    setSelectedProducts((prevSelectedProducts) => {
      if (event.target.checked) {
        return [...prevSelectedProducts, productId]
      } else {
        return prevSelectedProducts.filter((selectedProductId) => selectedProductId !== productId)
      }
    })
  }

  const handleDialogClose = () => {
    setShowCompareDialog(false)
  }

  // note: setting and getting items from local storage could be a good candidate for a custom hook, if the app was going to want to persist data in local storage in various spots!
  // instead of local storage, to persist state, could also use url params and filter our state based on those params
  useEffect(() => {
    // when we have selected products, set them on local storage
    if (selectedProducts.length > 0) {
      localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts))
    }
  }, [selectedProducts])

  useEffect(() => {
    // on initial mount, see if we have any stored products and if so, set them to our state
    const storedSelectedProducts = localStorage.getItem('selectedProducts')
    if (storedSelectedProducts) {
      setSelectedProducts(JSON.parse(storedSelectedProducts).map(Number))
    }
  }, [])

  // once we have data back from api, set on state
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
        <section>
          {selectedProducts.length > 1 && (
            <button className="primary mb-2" onClick={() => setShowCompareDialog(!showCompareDialog)}>
              Compare {selectedProducts.length} items
            </button>
          )}

          <ul className="grid grid-cols-1 gap-x-4 gap-y-6 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-6 md:gap-x-6 md:gap-y-8">
            {products.map((product) => (
              <li key={product.id} className="col-span-1 max-w-[360px] cursor-pointer">
                <Product product={product} onSelect={handleProductSelect} isSelected={selectedProducts.includes(product.id)} />
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <p>No Products available</p>
      )}
      {filtered && products.length === 0 && <p>No matching products were found.</p>}
      {showCompareDialog && <CompareDialog title="Compare products" closeCallback={handleDialogClose} />}
    </>
  )
}

export default Products
