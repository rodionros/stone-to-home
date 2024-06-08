'use client'

import styled from "styled-components";

export const BurgerButton = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 30px;
    height: 2px;
    background: var(--foreground);
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Menu = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  background-color: var(--white);
  position: absolute;
  z-index: 100;
  top: 60px;
  right: 0;
  width: 200px;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MenuLink = styled.a`
    padding: 15px 20px;
    text-decoration: none;
    color: var(--foreground);
    font-size: 18px;

    &:hover {
      background-color: #f0f0f0;
    }
`;