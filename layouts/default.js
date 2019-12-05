import Meta from '../components/meta'
import Nav from '../components/nav'
import Footer from '../components/footer'
export default ({ children }) => (
  <div className="overflow-x-hidden">
    <Meta />
    <Nav/>
    { children }
    <Footer />
  </div>
)