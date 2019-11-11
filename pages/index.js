import React from 'react'
import Page from '../layouts/default'
import Main from '../components/Home/Main'
import Portfolio from '../components/Home/Portfolio'
import About from '../components/Home/About'
import Contact from '../components/Home/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles/app.scss'


class Home extends React.Component {
  initAos() {
    AOS.init({
        duration: 2000,
        offset: 10
      })
  }
  componentDidMount() {
    this.initAos()
  }
  render() {
    return (
      <Page>
        <Main />
        <About />
        <Portfolio />
        <Contact />
      </Page>
    )
  }
}

export default Home
