import { navItems } from "../../data/data";

function MobileMenu({ toggleMenu }) {
    return (
        <div className="lg:hidden w-full h-screen bg-white z-50 absolute top-0 left-0 p-8 overflow-y-hidden">
            <div className="flex justify-between">
                <img src="/img/Logo.png" />
                <button
                    onClick={toggleMenu}
                    className="text-black text-2xl z-10"
                    aria-label="Close Menu"
                >
                    &times;
                </button>
            </div>

            <div className="space-y-4 pt-5">
                {navItems.map(({ label, url }, i) => (
                    <li className="list-none" key={i}>
                        <a
                            className="hover:text-primary text-sm transition-colors duration-150"
                            href={url}
                        >
                            {label}
                        </a>
                        <div className="border-b-[0.2px] border-primary"></div>
                    </li>
                ))}
            </div>
        </div>
    );
}

export default MobileMenu;
