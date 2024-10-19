import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import { navItems } from "../../data/data";
import Container from "../common/Container";
import MobileMenu from "./MobileMenu";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation(); 

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <nav className="w-full bg-[#f4f4f5] pt-[23px] pb-[15px] border-b-[1px] border-[#E4E4E7]">
            <Container className="w-full lg:max-w-[1268px] flex items-center justify-between">
                <div>
                    <img className="w-full" src="/img/Logo.png" alt="Logo" />
                </div>
                <div className="hidden lg:flex items-center gap-[35px]">
                    {navItems.map(({ label, url }, i) => (
                        <li className="list-none" key={i}>
                            <Link
                                to={url}
                                className={`text-[14px] text-tertiary font-normal 
                                ${
                                    location.pathname === url
                                        ? "font-extrabold text-[#09090b] underline decoration-2 underline-offset-[30px]"
                                        : ""
                                }`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </div>

                {/* Right Side of Navbar */}
                <div className="flex items-center gap-[9px]">
                    <div>
                        <button
                            onClick={toggleMenu}
                            className="block lg:hidden text-accent space-y-1"
                        >
                            <span className="block w-5 h-[1.5px] rounded-full bg-black"></span>
                            <span className="block w-5 h-[1.5px] rounded-full bg-black"></span>
                            <span className="block w-5 h-[1.5px] rounded-full bg-black"></span>
                        </button>
                    </div>
                    <div className="hidden size-10 bg-white rounded-full lg:flex items-center justify-center relative">
                        <img
                            className="size-[17.84px]"
                            src="/img/NotificationIcon.png"
                        />
                        <img
                            className="size-[10px] absolute top-0 right-[0px]"
                            src="/img/ActiveIcon.png"
                        />
                    </div>
                    <div className="hidden lg:flex items-center gap-[9px]">
                        <img className="size-10" src="/img/ProfileImage.png" />
                        <div>
                            <h4 className="font-semibold text-tertiary leading-5">
                                Usman Zafar
                            </h4>
                            <p className="text-tertiary">
                                usmanzafar@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
            </Container>
        </nav>
    );
}

export default Navbar;
