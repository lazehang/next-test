import React from 'react'
class TextScramble {
    constructor(el) {
        this.el = el
        this.chars = '!<>-_\\/[]{}—=+*^?#________'
        this.update = this.update.bind(this)
    }
    setText(newText) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * 40)
            const end = start + Math.floor(Math.random() * 40)
            this.queue.push({ from, to, start, end })
        }
        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }
    update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i]
            if (this.frame >= end) {
                complete++
                output += to
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar()
                    this.queue[i].char = char
                }
                output += `<span class="dud">${char}</span>`
            } else {
                output += from
            }
        }
        this.el.innerHTML = output
        if (complete === this.queue.length) {
            this.resolve()
        } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            phrases: [
                'Laze Hang',
                'Mangal Hang',
                'a Web Developer',
            ]
        }
    }
    componentDidMount() {
        this.init()
    }

    init() {
        const { phrases } = this.state
        const el = document.querySelector('.scrambleText')
        const fx = new TextScramble(el)
        let counter = 0
        const next = () => {
            fx.setText(phrases[counter]).then(() => {
                setTimeout(next, 1500)
            })
            counter = (counter + 1) % phrases.length
        }
        next()
    }
    render() {
        return (
            <div className="container home pt-20 pb-10 md:py-20">
                <div className="flex flex-wrap home-inner relative">
                <div className="ml-auto w-full md:w-2/3 md:absolute bottom-0 right-0 md:order-2 p-5 text-part">
                    <div className="text-2xl sm:text-4xl lg:text-50 leading-tight max-w-xl md:max-w-2xl md:ml-auto">
                    Hi, I am <br className="inline sm:hidden" /> <strong className="inline-block underline text-primary bold scrambleText">Mangal Hang</strong>
                    <br /> aka Lazehang - <strong className="underline text-primary bold">Fullstack Web Developer.</strong>
                    </div>
                </div>
                <div className="w-full md:w-2/3 md:order-1" data-aos="fade-up">
                    <img src="/images/undraw_version_control_9bpv.svg" className="w-full inline-block" />
                </div>
                </div>
            </div>
        )
    }
}

export default Main
