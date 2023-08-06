import { useState, useEffect } from 'react'
import productsData from '../api/products.json'

const useMockFetch = (endpoint) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        setError(null)

        // simulate async operation
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // handle cases for our two mock endpoints
        switch (endpoint) {
          case 'api/products':
            setData(productsData)
            break
          case 'api/products/id':
            {
              const productId = endpoint.split('/')[2]
              const product = productsData.find((item) => item.id === parseInt(productId))
              setData(product)
            }
            break
          default:
            setData(null)
        }
        setIsSuccess(true)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [endpoint])

  return { data, isLoading, isSuccess, error }
}

export default useMockFetch
