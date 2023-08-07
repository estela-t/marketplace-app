import { Link } from 'react-router-dom'

import QuantityChip from './QuantityChip'
import placeholder from '../assets/placeholder.jpeg'

const Product = ({ product, onSelect, isSelected }) => {
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
      <div className="mt-3">
        <input type="checkbox" id={product.id} onChange={(e) => onSelect(e)} checked={isSelected} />
        <label htmlFor={product.id} className="text-sm ml-1">
          Compare
        </label>
      </div>
    </>
  )
}

export default Product
