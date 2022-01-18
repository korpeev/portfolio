import React, { useState } from "react";
import { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuList } from "../../types";
import cl from "./classes";

const menuListItems: MenuList[] = [
  {
    text: "Main",
    href: "#main",
  },
  {
    text: "About me",
    href: "#aboutme",
  },
  {
    text: "Projects",
    href: "#projects",
  },
  {
    text: "Contacts",
    href: "#Contacts",
  },
];
const Header = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const toggleOpenMenu = (): void => {
    setOpenMenu(!openMenu);
  };
  const resizeHandler = () => {
    if (openMenu && window.document.body.offsetWidth < 768) {
      setOpenMenu(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <header className={cl.headerClasses}>
      <div className={cl.containerClasses}>
        <h1 onClick={() => navigate("/")} className={cl.headerTitleClasses}>
          Portfolio
        </h1>
        {location.pathname === "/" ? (
          <>
            <div onClick={toggleOpenMenu} className={cl.menuButtonClasses}>
              {!openMenu ? <GiHamburgerMenu /> : <IoMdClose />}
            </div>
            <div className={cl.menuBlockClasses(openMenu)}>
              <ul className={cl.menuListClasses}>
                {menuListItems.map(({ text, href }) => (
                  <li
                    key={href}
                    onClick={toggleOpenMenu}
                    className={cl.menuListItemClasses}>
                    <a href={href}>{text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <button
            onClick={() => navigate("/")}
            className="text-white uppercase font-semibold hover:-rotate-3 transition duration-300 ease-linear cursor-pointer hover:text-gray-400">
            Go Back
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
