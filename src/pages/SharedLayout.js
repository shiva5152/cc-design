import {Header, Footer } from "../components"
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <main >
      <Header />
      <div className="hero">
      <Outlet />
      </div>
      <Footer />
    </main>
  )
}

export default SharedLayout
