import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <div className="fixed w-full z-20">
            <div className="mt-4 md:mt-6 h-[5dvh] w-[90vw] md:w-[70vw] backdrop-blur shadow-custom-small rounded-full mx-auto">
                <div className="bg-black w-full h-full bg-opacity-40 rounded-full">
                    <ul className="flex justify-center items-center gap-4 md:gap-20 h-full">
                        {["/", "/pwa", "/sources"].map((path, index) => (
                            <li key={path} className="text-xl font-bold">
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        isActive ? "text-accent" : "hover:text-accent"
                                    }
                                >
                                    {index === 0 ? "SW" : index === 1 ? "VitePWA" : "Quellen"}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menu;
