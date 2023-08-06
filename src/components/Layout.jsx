import { Outlet } from 'react-router-dom'

import Cart from '../assets/cart.svg'

const Layout = () => {
  return (
    <>
      <header className="py-8 md:py-10">
        <div className="wrapper">
          <h1 className="flex items-center">
            <img alt="" src={Cart} className="w-[40px] mr-2" />
            Marketplace
          </h1>
        </div>
      </header>
      <main className="wrapper py-8 md:pb-20">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
