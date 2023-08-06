import { useState, useEffect } from 'react'
import productsData from '../api/products.json'

const useMockFetch = (url) => {
  const [status, setStatus] = useState('idle')
  const [data, setData] = useState([])

  useEffect(() => {
    if (!url) return

    const fetchData = async () => {
      setStatus('fetching')

      try {
        if (url === 'api/products') {
          // simulate async operation
          await Promise.resolve()
          await new Promise((resolve) => setTimeout(resolve, 700))
          setData(productsData)
        } else if (url.startsWith('api/products/')) {
          console.log('am i here')
          const productId = url.split('/')[2]
          const product = productsData.find((item) => item.id === parseInt(productId))
          setData(product ? product : {})
        } else {
          throw new Error('Invalid endpoint')
        }
        setStatus('success')
      } catch (error) {
        setStatus('error')
        console.log(error)
      }
    }
    fetchData()
  }, [url])

  return { status, data }
}

export default useMockFetch
