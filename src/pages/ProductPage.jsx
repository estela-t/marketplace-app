import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useMockFetch from '../hooks/useMockFetch'

import placeholder from '../assets/placeholder.jpeg'

const ProductPage = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState()
  const { data, status } = useMockFetch(`api/products/${productId}`)

  useEffect(() => {
    if (status === 'success') {
      setProduct(data)
    }
  }, [status])

  useEffect(() => {
    console.log(product)
  }, [product])

  return (
    <>
      <Link to="/" className="inline-link">
        &#x2190; Back to all products
      </Link>

      {status === 'fetching' ? (
        <p>Getting product details...</p>
      ) : product !== undefined ? (
        <section className="flex flex-col items-center justify-center gap-10 mt-10 max-w-[610px] mx-auto md:flex-row xl:mx-0">
          <img alt="" src={placeholder} className="max-w-[300px]" />
          <div className="body-text">
            <h2 className="text-center mb-6">{product.product}</h2>
            <p>Key Features</p>
            <ul className="bullet-list my-4">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
            <p>
              Nulla nisi dolor, tempor ut ullamcorper nec, blandit non tellus. Phasellus vestibulum tincidunt elit sed mollis. Nulla non
              laoreet lacus, vel porttitor quam. Sed dapibus elit lacus, sit amet interdum lorem venenatis in. Cras eget vulputate turpis.
              Quisque tincidunt erat id porttitor aliquam.
            </p>
          </div>
        </section>
      ) : (
        <p>Product details unavailable.</p>
      )}
    </>
  )
}

export default ProductPage
