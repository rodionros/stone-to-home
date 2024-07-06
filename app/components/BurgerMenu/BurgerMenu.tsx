"use client";

import { useState } from 'react';
import { BurgerButton, Menu, MenuLink } from "@/app/components/BurgerMenu/styles";
import Link from "next/link";

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
        <Menu $isOpen={isOpen} style={{display: "flex", flexDirection: "column", gap: 10, padding: 20, fontSize: 18}}>
          <Link href="/" replace>Главная</Link>
          <Link href="/#catalog" replace>Каталог камня</Link>
          <Link href="/#services" replace>Услуги</Link>
          <Link href="/pay" replace>Доставка и оплата</Link>
          <Link href="/about" replace>О нас</Link>
        </Menu>
      </div>
  );
};

export default BurgerMenu;