"use client";

import { useState } from 'react';
import { BurgerButton, Menu, MenuLink } from "@/app/components/BurgerMenu/styles";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div>
        <BurgerButton onClick={toggleMenu}>
          <span/>
          <span/>
          <span/>
        </BurgerButton>
        <Menu $isOpen={isOpen}>
          <MenuLink href="#">Главная</MenuLink>
          <MenuLink href="#">Каталог камня</MenuLink>
          <MenuLink href="#">Услуги</MenuLink>
          <MenuLink href="#">Доставка и оплата</MenuLink>
          <MenuLink href="#">О нас</MenuLink>
        </Menu>
      </div>
  );
};

export default BurgerMenu;