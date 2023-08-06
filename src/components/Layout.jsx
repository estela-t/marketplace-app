import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header className="py-10">
        <div className="wrapper">
          <h1>Marketplace</h1>
        </div>
      </header>
      <main className="wrapper pt-10 pb-20">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
