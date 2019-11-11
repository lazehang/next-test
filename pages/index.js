import React from 'react'
import Page from '../layouts/default'
import Main from '../components/Home/Main'
import Portfolio from '../components/Home/Portfolio'
import About from '../components/Home/About'
import Contact from '../components/Home/Contact'
import '../styles/app.scss'

class Home extends React.Component {
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
