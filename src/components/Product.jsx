// import { Link } from 'react-router-dom'
import placeholder from '../assets/placeholder.jpeg'

const Product = ({ product }) => {
  return (
    <>
      {/* <Link to={`/products/1`}> */}
      {/* to={`/products/${product.id}`} */}
      <img alt="" src={placeholder} />
      <div className="flex justify-between font-semibold text-sm text-grey my-2">
        <p>{product.id}</p>
        <p>{product.serial}</p>
      </div>
      <h2>{product.product}</h2>
      {/* </Link> */}
    </>
  )
}

export default Product
