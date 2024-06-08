import BurgerMenu from '../BurgerMenu';
import { HeaderContainer, Logo, Nav, NavLink } from "@/app/components/Header/styles";

const Header = () => {
  return (
      <HeaderContainer>
        <Logo>Камень в дом</Logo>
        <Nav>
          <NavLink href="#">Главная</NavLink>
          <NavLink href="#">Каталог камня</NavLink>
          <NavLink href="#">Услуги</NavLink>
          <NavLink href="#">Доставка и оплата</NavLink>
          <NavLink href="#">О нас</NavLink>
        </Nav>
        <BurgerMenu />
      </HeaderContainer>
  );
};

export default Header;