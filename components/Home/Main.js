import React from 'react'
class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            phrases: [
                'Laze Hang',
                'Mangal Hang',
                'Web Developer'
            ]
        }
    }

    componentDidMount() {
        this.typewriter()
    }

    typewriter() {
        var TxtType = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtType.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

            var that = this;
            var delta = 200 - Math.random() * 100;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
            }

            setTimeout(function() {
            that.tick();
            }, delta);
        };

        window.onload = function() {
            var elements = document.getElementsByClassName('typewrite');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
            document.body.appendChild(css);
        }
    }

    render() {
        return (
            <div className="container home pt-20 pb-10 md:py-20">
                <div className="flex flex-wrap home-inner relative">
                    <div data-aos="fade-up" className="ml-auto w-full md:w-2/3 md:absolute bottom-0 right-0 md:order-2 p-5 text-part">
                        <div className="text-xl sm:text-3xl lg:text-5xl leading-tight max-w-xl md:max-w-2xl md:ml-auto">
                        Hi, I am <br className="inline sm:hidden" /> 
                        <strong class="typewrite inline-block underline text-primary bold" data-period="2000" data-type='[ "Mangal Hang.", "a Web Developer.", "a Web Enthusiast." ]'>
                            <span class="wrap"></span>
                        </strong>
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
