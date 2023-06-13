import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link =  ({page,selectedPage,setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase();
    return(
        <AnchorLink className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
        hover:text-yellow transition duration-500
        `}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}


const Navbar = ({selectedPage,setSelectedPage}) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width : 768px)");

    return(
        <nav className={`z-40 w-full fixed top-0 py-6`}>
            <div className="flex item-center justify-between mx-auto w-5/6">
             <h4 className="font-playfair text-3xl font-bold">JE</h4>
             {/* DESKTOP NAV */}
             {isAboveSmallScreens ? (
                <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">

                </div>
             ) : (<div></div>) }
            </div>
        </nav>
    )

}

export default Navbar;

