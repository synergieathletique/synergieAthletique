import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <div className="page">
      <ScrollToTop />
      <Navbar />
      <main id="contenu" className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
