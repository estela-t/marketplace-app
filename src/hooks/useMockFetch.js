import { useState, useEffect } from 'react'
import productsData from '../api/products.json'

// I gave a lot of consideration as to how I would show knowledge of utilizing RESTful apis to fetch data, given a json file
// I considered building a mini api with something like Express, but wanted to keep the focus of the project on the frontend
// I finally landed on a fairly specific implementation using a custom hook that returns our "mock" data, to just show that I understand rest services and how to handle async operations
// irl I might do something similar for testing purposes only
// I would also consider implementing caching, perhaps with a library (for react projects I've exptensively used the react-query lib which really nicely handles bits like stale data & caching)

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
