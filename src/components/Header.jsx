import logo from "../assets/logo.png"
function Header(){
    return(
        <>

        <header className=" bg-red-500 flex flex-row justify-center items-center shadow-xl">
            <nav className="flex flex-row justify-center items-center p-5 gap-1.5 ">
                <img className="w-8 h-8 invert "  src={logo} alt="Earth logo" />
                <h1 className="text-white text-xm">MyTravelJournal.</h1>
            </nav>
        </header>
        </>
    )
}

export default Header