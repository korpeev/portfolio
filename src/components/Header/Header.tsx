import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import cl from './classes';

const menuListItems: string[] = ['Главная', 'Обо Мне', 'Проекты', 'Контакы'];
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleOpenMenu = (): void => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className={cl.headerClasses}>
      <div className={cl.containerClasses}>
        <h1 className={cl.headerTitleClasses}>Portfolio</h1>
        <div onClick={toggleOpenMenu} className={cl.menuButtonClasses}>
          {!openMenu ? <GiHamburgerMenu /> : <IoMdClose />}
        </div>
        <div className={cl.menuBlockClasses(openMenu)}>
          <ul className={cl.menuListClasses}>
            {menuListItems.map((text) => (
              <li className={cl.menuListItemClasses}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
