import Meta from '../components/meta'
import Nav from '../components/nav'
import Footer from '../components/footer'
export default ({ children }) => (
  <div className="overflow-x-hidden">
    <Meta />
    <Nav/>
    { children }
    <Footer />
    <script dangerouslySetInnerHTML={{__html: `(function(d, id) {
        if (d.getElementById(id)) return;
        var sc, node = d.getElementsByTagName('script')[0];
        sc = d.createElement('script'); sc.id = id;
        sc.src = 'https://sdk.getsitekit.com/static/js/app.js#apiKey=592d3dec20e076287d2e91cdd6a16be3';
        node.parentNode.insertBefore(sc, node);
      }(document, 'sitekit-sdk'));`}}>
    </script>
  </div>
)