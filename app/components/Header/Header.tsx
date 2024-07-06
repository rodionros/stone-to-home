import BurgerMenu from '../BurgerMenu';
import { HeaderContainer, Logo, Nav, NavLink } from "@/app/components/Header/styles";
import Link from "next/link";

const Header = () => {
  return (
      <HeaderContainer>
        <Logo>Камень в дом</Logo>
        <Nav>
          <Link href="/" replace>Главная</Link>
          <Link href="/#catalog" replace>Каталог камня</Link>
          <Link href="/#services" replace>Услуги</Link>
          <Link href="/pay" replace>Доставка и оплата</Link>
          <Link href="/about" replace>О нас</Link>
        </Nav>
        <BurgerMenu />
      </HeaderContainer>
  );
};

export default Header;