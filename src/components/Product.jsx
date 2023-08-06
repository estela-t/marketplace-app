import { Link } from 'react-router-dom'

import QuantityChip from './QuantityChip'
import placeholder from '../assets/placeholder.jpeg'

const Product = ({ product }) => {
  return (
    <>
      <Link to={`/products/${product.id}`}>
        <img alt="" src={placeholder} />
        <div className="flex justify-between font-semibold text-sm text-grey my-2">
          <p>{product.id}</p>
          <p>{product.serial}</p>
        </div>
        <h2 className="mb-2">{product.product}</h2>
        <div className="flex justify-between items-end">
          <p>${product.total} CAD</p>
          <QuantityChip quantity={product.quantity} />
        </div>
      </Link>
    </>
  )
}

export default Product
