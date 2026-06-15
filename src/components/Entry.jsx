import marker from "../assets/marker.png"

function Entry(props) {
    
    return (
        <>
            <main className="flex justify-center">
               
                <div className="font-roboto mt-10 flex flex-row justify-center items-center max-w-150 p-2 gap-5">
                    <img className="h-60 w-45 rounded-md object-cover" src={props.img[0].src} alt={props.img[0].alt} />
                    
                    <div className="flex flex-col items-start py-3 px-5 gap-2.5">
                        
                        <div className="flex justify-start items-center w-full space-x-2">
                            <img className="h-3.5 w-3.5" src={marker} alt="marker logo" />
                            <p className="text-gray-700 font-bold text-sm tracking-widest">{props.country}</p>
                            <a className="border-b border-gray-400 text-gray-500 text-xs font-medium ml-auto" target="_blank" rel="noreferrer" href={props.mapUrl}>
                                View on Google Maps
                            </a>
                        </div>
                        
                        <h1 className="mt-1 font-roboto text-3xl font-bold text-gray-900">{props.title}</h1>
                        <p className="text-[12px] m-0 font-bold text-gray-800">{props.date}</p>
                        <p className="text-[14px] font-normal text-gray-600 leading-relaxed">
                            {props.desc}
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Entry