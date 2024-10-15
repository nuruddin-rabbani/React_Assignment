import React, { useState } from "react";
import { navItems } from "../../data/data";
import Container from "../common/Container";
import MobileMenu from "./MobileMenu";

function Navbar() {
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     const toggleMenu = () => {
         setIsMenuOpen((prev) => !prev);
     };
    
    return (
        <nav className="w-full bg-[#E4E4E7] pt-[23px] pb-[15px] border-b-[1px] border-[#3f3f46]">
            <Container className="w-full lg:max-w-[1268px] flex items-center justify-between">
                <div>
                    <img src="/img/Logo.png" alt="Logo" />
                </div>
                <div className="hidden lg:flex items-center gap-[35px]">
                    {navItems.map(({ label, url }, i) => (
                        <li className="list-none" key={i}>
                            <a
                                className="text-[14px] text-tertiary font-normal hover:font-bold hover:text-secondary hover:underline hover:decoration-2 hover:underline-offset-[26.5px] transition-colors duration-150"
                                href={url}
                            >
                                {label}
                            </a>
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
