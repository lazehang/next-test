import Meta from '../components/meta'
import Nav from '../components/nav'
import Footer from '../components/footer'
export default ({ children }) => (
  <div>
    <Meta />
    <Nav/>
    { children }
    <Footer />
  </div>
)