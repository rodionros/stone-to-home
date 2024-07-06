'use client'

import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: var(--white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
    width: 20%;
    font-size: 24px;
    font-weight: bold;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 20px;

    @media (max-width: 768px) {
      display: none;
    }
`;

export const NavLink = styled.a`
    text-decoration: none;
    color: var(--foreground);
    font-size: 18px;

    &:hover {
      text-decoration: underline;
    }
`;