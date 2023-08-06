import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Products from './components/Products'
import Layout from './components/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
