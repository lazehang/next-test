const Main = () => (
    <div className="container home pt-20 pb-10 md:py-20">
        <div className="flex flex-wrap home-inner relative">
        <div className="ml-auto w-full md:w-2/3 md:absolute bottom-0 right-0 md:order-2 p-5">
            <div className="text-4xl lg:text-50 leading-tight max-w-xl md:max-w-2xl md:ml-auto">
            Hi, I am <strong className="underline text-primary bold">Mangal Hang</strong>
            <br />aka Lazehang - <strong className="underline text-primary bold">Fullstack Web Developer.</strong>
            </div>
        </div>
        <div className="w-full md:w-2/3 md:order-1">
            <img src="/images/undraw_version_control_9bpv.svg" className="w-full inline-block" />
        </div>
        </div>
    </div>
)

export default Main
