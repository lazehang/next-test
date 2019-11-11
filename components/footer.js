const links = [
    { href: 'https://github.com/lazehang', label: 'Facebook', target: '_blank' },
    { href: 'https://github.com/lazehang', label: 'Instagram', target: '_blank' },
    { href: 'https://github.com/lazehang', label: 'Medium', target: '_blank' }
  ].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`
    return link
})
const Footer = () => (
    <footer className="footer bg-primary text-white">
        <div className="container py-3">
            <div className="flex justify-between flex-col md:flex-row">
                <ul className="flex flex-col md:flex-row flex-wrap -mx-3">
                    {
                        links.map((link) => (
                            <li className="px-3" key={link.key}>{link.label}</li>
                        ))
                    }
                </ul>
                <a href="mailto:lazehang@gmail.com" className="AvenirNext bold">
                    lazehang@gmail.com
                </a>
            </div>
        </div>
    </footer>
)

export default Footer