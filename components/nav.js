import React from 'react'
import Link from 'next/link'
import { throttle } from 'lodash'
const links = [
  { href: 'https://github.com/lazehang', label: 'GitHub', target: '_blank' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrolled: false
    }
    this.throttle = throttle(this.handleScroll, 100)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.throttle)
  }

  handleScroll = () => {
    const isTop = window.scrollY < document.querySelector('nav').getBoundingClientRect().bottom;
    this.setState({ scrolled: !isTop })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.throttle)
  }

  render() {
    const { scrolled } = this.state
    return (
        <nav className="fixed top-0 w-full bg-white z-100">
          <ul className="container" className={scrolled ? 'scrolled' : ''}>
            <li>
              <Link href='/'>
                <img src="/images/laze.png" className="logo" alt="Laze" />
              </Link>
            </li>
            {links.map(({ key, href, label, target }) => (
              <li key={key}>
                <a href={href} target={target}>{label}</a>
              </li>
            ))}
          </ul>

          <style jsx>{`
            nav {
              text-align: center;
            }
            ul {
              display: flex;
              justify-content: space-between;
              padding: 24px;
              transition: all .4s;
            }
            li {
              display: flex;
            }
            a {
              text-decoration: none;
            }
            .scrolled {
              padding: 15px;
            }
            .logo {
              width: 95px;
            }
            .scrolled .logo {
              width: 80px;
            }
          `}</style>
        </nav>
      )
  }
}

export default Nav
