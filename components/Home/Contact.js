import React from 'react'
import * as typeformEmbed from '@typeform/embed'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeform: null
        }
        this.openForm = this.openForm.bind(this)
    }

    componentDidMount() {
        this.setState({
            typeform: typeformEmbed.makePopup("https://lazehang.typeform.com/to/qfA8vh", {
                mode: 'drawer_left',
                hideHeaders: true,
                hideFooter: true
            })
        })
    }

    openForm() {
        this.state.typeform.open()
    }
    render() {
        return (
            <div className="bg-black text-white py-20">
                <div className="container py-20">
                    <div className="AvenirNext bold uppercase w-full text-center text-4xl md:text-50">
                        CONTACT <span className="line-through">US</span> ME
                        <div className="AvenirNext bold text-md max-w-3xl ml-auto">
                            <button onClick={this.openForm} className="border border-white rounded p-3 px-5 text-center">Start Now</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact