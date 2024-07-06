import BurgerMenu from '../BurgerMenu';
import { HeaderContainer, Logo, Nav, NavLink } from "@/app/components/Header/styles";

const Header = () => {
  return (
      <HeaderContainer>
        <Logo>Камень в дом</Logo>
        <Nav>
          <NavLink href="/">Главная</NavLink>
          <NavLink href="#catalog">Каталог камня</NavLink>
          <NavLink href="#services">Услуги</NavLink>
          <NavLink href="/pay">Доставка и оплата</NavLink>
          <NavLink href="/about">О нас</NavLink>
        </Nav>
        <BurgerMenu />
      </HeaderContainer>
  );
};

export default Header;