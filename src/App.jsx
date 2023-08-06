import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Products from './components/Products'
import Layout from './components/Layout'
import ProductPage from './pages/ProductPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Products />} />
          <Route path="/products/:productId" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
