const projects = [
    {
        title: 'Fc Ace',
        description: 'Sit veniam veniam do mollit dolore velit reprehenderit occaecat.'
    },
    {
        title: 'Fc Ace',
        description: 'Sit veniam veniam do mollit dolore velit reprehenderit occaecat.'
    },
    {
        title: 'Fc Ace',
        description: 'Sit veniam veniam do mollit dolore velit reprehenderit occaecat.'
    }
]

const Portfolio = () => (
    <div className="container home py-10 md:py-20">
        <div className="AvenirNext bold uppercase text-primary w-full text-4xl md:text-50 mb-5">
            Portfolio
        </div>
        <div className="flex flex-wrap -mx-2">
            {
               projects.map((item, i) => {
                   return (
                       <div data-aos="fade-up" className="w-full md:w-1/3 p-2" key={i}>
                           <div className="rounded shadow-lg cursor-pointer">
                            <div className="img-wrapper">
                                <img src="https://dummyimage.com/500x400/000000/ffffff" className="rounded-t w-full inline" />
                            </div>
                            <div className="leading-tight p-5">
                                <h3 className="text-lg pb-2 bold uppercase">{ item.title }</h3>
                                <p>
                                    {item.description}
                                </p>
                                <button className="p-3 text-white w-full text-center border bg-primary border-primary rounded mt-3">
                                    Read More..
                                </button>
                            </div>
                           </div>
                       </div>
                   )
               }) 
            }
        </div>
    </div>
)

export default Portfolio
