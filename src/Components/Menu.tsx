import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div className="fixed w-full z-20 ">
            <div className="mt-4 md:mt-6 h-[5dvh] w-[90vw] md:w-[70vw] backdrop-blur shadow-custom-small rounded-full  mx-auto">
                <div className="bg-black w-full h-full bg-opacity-40 rounded-full ">
                    <ul className="flex justify-center items-center gap-4 md:gap-20 h-full">
                        <li className="text-xl font-bold hover:text-accent"><Link to="/">SW</Link></li>
                        <li className="text-xl font-bold hover:text-accent"><Link to="/pwa">VitePWA</Link></li>
                        <li className="text-xl font-bold hover:text-accent"><Link to="/skill">Skill</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu